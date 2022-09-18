import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import logo from './netflix_.png';


function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
  
  const transitionNavBar = () =>{
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && `nav__black`}`}>
        <div className="nav__content">
            <img onClick={() => history('/')} className="nav__logo" src={logo} alt="" />
            <img onClick={() => history('/Profile')} className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Nav