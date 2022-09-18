import React, { useState } from 'react'
import './Registration.css'
import Registration2 from './Registration2'

function Registration({emailID}) {
    const [step2, getStep2] = useState(false)

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) : string;
      }

  return (
    <>
    { step2 ? (
        <Registration2 email_ID={emailID}/>
    ):(
    <div className='registration'>
        <header className="registration__navBar">
            <img className='registrationPage__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <p className='registration__signIn'>{truncate(emailID, 10)}</p>
        </header>
        <div className="registration__body">
            <div className="registration__Step1Section">
                    <>
                    <div className="registration__Step1Logo">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="" />
                    </div>
                    <div className="registration__Step1Title">
                        <p>STEP 1 OF <strong>2</strong></p>
                    </div>
                    <div className="registration__Step1Description">
                        <h2>Finish setting up your account</h2>
                        <h3>Netflix is personalised for you. Create a password to watch on any device at any time.</h3>
                    </div>
                    <div className="registration__step1Button">
                        <button onClick={() => getStep2(true)}>Next</button>
                    </div>
                    </>
                
                
            </div>
        </div>
    </div>
    )}
    </>
  )
}

export default Registration