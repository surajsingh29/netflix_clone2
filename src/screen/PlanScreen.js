import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import './PlanScreen.css'

function PlanScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
       db.collection('customers')
       .doc(user.uid)
       .collection('subscriptions')
       .get()
       .then(querySnapshot => {
            querySnapshot.forEach(async subscription =>{
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
       }) 
    }, [user.uid])
    
    useEffect(()=>{
        db.collection('products')
        .where("active", "==", true)
        .get()
        .then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach((price) => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceDate: price.data()
                    };
                });
            });
            setProducts(products);
        });
    },[]);

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            mode: "subscription",
            price: priceId, // One-time price created in Stripe
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot((snap) => {
            const {error, url} = snap.data();

            if(error){
                alert(`An error ocurred: ${error.message}`);
            }

            if (url){
                // const stripe = await loadStripe('pk_test_51LZr35SCoJES0Txp2O6Y3lVCmzzDurEG2NzI6fJEmgnBOwNJS9lUbEdUeG58cd65vxld65FiwGxm6NQjqMDaHNTm00hlkXBQOI');
                // stripe.redirectToCheckout({ sessionId });
                window.location.assign(url);
            }
        })
    };

  return (
    <div className='planScreen'> <br />
        {subscription && <p>Renewal date: {new Date(subscription?.current_period_end *1000).toLocaleDateString()}</p>}

        {Object.entries(products).map(([productId, productData]) => {
            
            const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
            
            return (
                <div key={productId} className={`${isCurrentPackage && "planScreen__plan--disabled"} planScreen__plan`}>
                    <div className="planScreen__info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                        {isCurrentPackage ? 'Current' : 'Subscribe'}
                    </button>
                </div>  
            )
        })}
    </div>
  )
}

export default PlanScreen