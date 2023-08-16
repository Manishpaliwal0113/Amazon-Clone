import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from './components/StateProvider'
import { auth } from './components/firebase'

const App = () => {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  console.log("user is >> " , user);


  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path='/checkout' element = {<><Header/> <Checkout/></>} />
          
        
        <Route path='/login' element = {<Login/>} />
          
        
        <Route path='/' element = {<><Header/> <Home/></>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App