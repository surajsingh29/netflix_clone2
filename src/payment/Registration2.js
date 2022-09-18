import React, { useRef } from 'react'
import './Registration2.css'
import { auth } from '../firebase';

function Registration2({email_ID}) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) =>{console.log(authUser);})
        .catch((error) => {alert(error.message);})
    };

  return (
    <div className='registration2'>
        <header className="registration2__navBar">
            <img className='registrationPage2__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <p className='registration2__signIn'>{email_ID}</p>
        </header>
        <div className="registration2__body">
        
        <div className="registrationPage2__section">                
                <div className="registrationPage2__title">
                    <p>STEP 2 OF <strong>2</strong></p>
                </div>
                <div className="registrationPage2__description">
                    <h2>Create a password to start your membership</h2>
                    <h3>Just a few more steps and you're done!</h3>
                    <h3>We hate paperwork, too.</h3>
                </div>
                <div className="registrationPage2__form">
                    <form>
                        <input ref={emailRef} type="email" name="email" id="email"/>
                        <input ref={passwordRef} type="password" id="password" placeholder='Password'/>
                    </form>
                </div>
                <div className="registrationPage2__button">
                    <button onClick={register}>Next</button>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Registration2