

import React from 'react'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './components/Home';
import { BrowserRouter as Router,Route, Routes, Switch } from 'react-router-dom';
import logo from './components/images/loogo.PNG'
import { HashLink as Link } from 'react-router-hash-link'
import { Navbar , Nav  } from 'react-bootstrap'
import App_d from './components/App_d';
import Buyer from './components/Buyer'; 
import Siller from './components/Siller';
import Parte from './components/Parte';
import About_us from './components/About_us';
import Contact from './components/Contact';


function App() {
  return (
   
     <>
     <Router>
     <Navbar   fixed="top" expand="lg"className='bg_navbar '>
    <Navbar.Brand >
    <a className="navbar-brand img" href="/Home">
           <img className='logo' 
            src={logo} alt= "logo"
           
            >
              </img></a>
    </Navbar.Brand>
    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
      <Nav className="justify-content-end flex-grow-1 pe-3 ">
        <Nav.Link as={Link}  to ='/Home'>Home</Nav.Link>
        <Nav.Link as={Link} to ='/App_d'  >dApp</Nav.Link>
        <Nav.Link as = {Link} to ='/Siller'>Seller</Nav.Link>
        <Nav.Link as = {Link} to ='/Siller'>Buyer</Nav.Link>
        <Nav.Link as = {Link} to ='/Siller'>Partners</Nav.Link>
        <Nav.Link as = {Link} to ='/Siller'>About us </Nav.Link>
        <Nav.Link as = {Link} to ='/Siller'>Contact</Nav.Link>
       
        
      </Nav>
    </Navbar.Collapse>
</Navbar>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/App_d" element={<App_d/>}/>
     <Route path="/Siller" element={<Siller/>}/>
     <Route path="/Buyer" element={<Buyer/>}/>
     <Route path = "/About_us" element = {<About_us/>}/>
     <Route path = "/Contact" element = {<Contact/>}/>
     <Route path = "/Parte" element = {<Parte/>}/>
     
 
     </Routes>
    </Router>

    </>
    
    
  );
}

export default App;
