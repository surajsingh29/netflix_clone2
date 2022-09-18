import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignupScreen.css'

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) =>{console.log(authUser);})
        .catch((error) => {alert(error.message);})
    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button type="submit" onClick={signIn}>Sign In</button>
            <div className="remember__help">
                <div className="remember__me">
                    <input type="checkbox" id="remembreme" name='rememberme' value="RememberMe"/>
                    <label for="rememberme"> Remember me</label>
                </div>
                <div className='help__section'>
                    <a href="/">Need help?</a>
                </div>
            </div>
            <h4>
                <span className='signupScreen__grey'>New to Netflix? </span> 
                <span className='signupScreen__link' onClick={()=> window.location.reload(false)}>Sign up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen