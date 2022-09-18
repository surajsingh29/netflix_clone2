import React, { useState } from 'react'
import './LoginScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Chevron from 'react-chevron';
import SignupScreen from './SignupScreen';
import Registration from '../payment/Registration';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [getEmail, getEmailId] = useState('')
    let emailId  = getEmail
    if(getEmail !== '' && signUp === true){
        let emailId2 = [emailId]
            return (<div><Registration emailID ={emailId2[0]}/></div>)
    }
    else{
  return (
    <div className='loginscreen'>
        <div className="loginScreen__background">
            <img className='loginScreen__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <div className="loginScreen__languageButton">
            <FontAwesomeIcon className='globe__language' icon={ faGlobe }/>
                <select className='language__Selector'  name='language' id='language'>
                    <option name="language" selected lang='en' value="/in/" data-language="en" data-country="IN">English</option>
                    <option name="language" lang='hi' value="/in-hi/" data-language="hi" data-country="IN">हिन्दी</option>
                </select>
            </div>
            <button className='loginScreen__button' onClick={() => setSignIn(true)}>Sign In</button>
            <div className="loginScreen__gradient"></div>
        </div>

        <div className="loginScreen__body">
            {signIn ?(
                <SignupScreen/>
            ):(
                <div className='loginScreen__bodySection'>

                <div className="loginScreen__input">
                    <form className='loginScreen__form'>
                        <h1>Unlimited films, TV programes and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginScreen__formField">
                            <div className="loginScreen__field">
                            <input type="email" className='loginScreen__email' placeholder='Email Address' id='email' value={getEmail} onChange={(e) => {getEmailId(e.target.value)}}/>
                            <button className="loginScreen__getStarted" onClick={() => setSignUp(true)}>
                                <span className='cta-btn-txt'>Get Started
                                <span className="cta-btn-arrow"> <Chevron/></span></span>
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            )}
            
        </div>
    </div>
  )}
}

export default LoginScreen