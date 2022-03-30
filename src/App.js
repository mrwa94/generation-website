

import React from 'react'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './components/Home';
import { BrowserRouter as Router,Route, Routes, Switch } from 'react-router-dom';
import logo from './components/images/loogo.PNG'
import { HashLink as Link } from 'react-router-hash-link'
import { Navbar } from 'react-bootstrap'
import App_d from './components/App_d';











function App() {
  return (
   
     <>
     <Router>
     <Navbar class = "navbar"  >
    
    <nav className="navbar   ">
      <div className="container ">
        <a className="navbar-brand img" href="#">
           <img className='logo' 
            src={logo} alt= "logo"
           
            >
              </img></a>
      
        
        <div className="navbar_div" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
            <Link  aria-current ="page"  to ='/Home' className='nav-link active' > Home </Link>
            
            </li>
            <li className="nav-item">
            
              <Link   to ='/App_d' className='nav-link active' >dapp </Link>
            
            </li>
    
            <li className="nav-item">
        
              <Link to ='#'   className='nav-link active'> Seller </Link>
           
                    </li>
            <li>
            
              <Link   to ='#' className='nav-link active' >Buyer </Link>
            
            </li>
            <li>
            
              <Link   to ='#' className='nav-link active' >Partners </Link>
            
            </li>
            <li>
            
            <Link   to ='#' className='nav-link active' >About us </Link>
          
          </li>
          <li>
            
            <Link   to ='#' className='nav-link active' >Contact </Link>
            
          
          </li>
          </ul>
        
        </div>
      </div>
    </nav>
    <div>
    
    </div>
     </Navbar>
    

     <Routes>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/App_d" element={<App_d/>}/>
     </Routes>
    </Router>

   


     
     

     
     
     

     
      
      
      

 
  
  
   
    
    </>
    
    
  );
}

export default App;
