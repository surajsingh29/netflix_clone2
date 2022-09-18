import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screen/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        //loggedout
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (

            <LoginScreen/>

        ): (
          <Routes>
            <Route path='/' element={<Homescreen />}/>    
            <Route path='/Profile' element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
