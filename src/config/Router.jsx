import React from 'react'
import "../App.css"

import Contact from '../components/Contact';
import About from '../components/About';
import Home from '../components/Home';
import { BrowserRouter, Link, Route, Routes ,  } from 'react-router-dom'
import Channel from '../components/Channel';
import Facebook from '../components/Facebook';

function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <nav className='ho'>
              <h4 className='h41'>WeB World</h4>
                <ul  >
            <li className='ho ' >
              
                <Link className='lin'   to="/">Home</Link>
                
                <Link className='lin'   to="contact">Contact</Link>
                
                <Link className='lin'  to="about">About</Link>
            </li>
                
                
        </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='contact/' element={<Contact/>}>
              <Route path='channel' element={<Channel/>}/>
              <Route path='facebook' element={<Facebook/>}/>
            </Route>
            <Route path='about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;