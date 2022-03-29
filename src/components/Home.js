import React from 'react'
import { Navbar  , Container , Row ,Col ,Card ,Button ,CardGroup} from 'react-bootstrap'
import {  BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import logo from './images/loogo.PNG'
import video from './video/Dummy.MP4'
import img1 from './images/ecosystem.png'
import img2 from './images/planet-earth.png'
import img3 from './images/Hydrogen.jpeg'
import img4 from './images/Hydrogen2.JPG'



export const Home = () => {
  return (
      <>
    <Navbar class = "navbar"  >
     
     <BrowserRouter>
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
         <Link   to ='#' className='nav-link active' > Home </Link>
         </li>
         <li className="nav-item">
         
           <Link   to ='#dapp' className='nav-link active' >dapp </Link>
         
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
 
 
 </BrowserRouter>
 
          </Navbar>
        
   <section >
     <div >
     <Container >
   <Row className='mission_statement'>
    <Col> 
    <p>Our Mission</p>
    "At REgeneration Energy, we understand the critical role Hydrogen and other new energy resources play for our future energy needs. We provide end-to-end digital blockchain-based services for new energy ecosystems, bringing the energy industry into the Web 3.0 era.

Our goals? 

To democratize energy, making it accessible for all stakeholders involved and reducing barriers to entry

To decentralize energy, so that we can do away with one homogenous marketplace and instead create localized clusters that make sense for their regions.

To drive affordability, providing digital services, sustainable financing and localized markets to projects and purchasers. Thus accelerating ecosystem growth.

To demonstrate transparency and efficacy, in an industry that is usually driven by secrecy and slower technological uptake. 

To decouple new energy industries like Hydrogen from traditional financial and trading systems via Web 3.0



At REgeneration, we believe in a better tomorrow, fueled by abundant energy resources that can be utilized by all."
</Col>
  </Row>
</Container>

     </div>
     </section>

     <section >
     <div className='content'>
  
    <p>Why REgeneration?</p>
    <video className='video'
    src={video}
    alt = "Your browser does not support the video tag."
    autoPlay
    loop
    muted
    >

    </video>
     </div>
     </section>

     <section className=' '>
       <div className='card  '>
       <CardGroup className=' my-4  mx-4  '> 
       
       <Card  className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '20rem' }}>
       <Card.Img className='rounded ' variant="top" src={img3} />
 <Card.Body>
 
   <Card.Title>Siller</Card.Title>
   
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Learn more..</Button>
 </Card.Body>
</Card>
<Card   className='card_contaner text-center my-4 mx-4  '      style={{ width: '20rem' }}>
<Card.Img className='rounded ' variant="top" src={img4} />

 <Card.Body>
   <Card.Title>Buyer</Card.Title>
   <Card.Text>
     Some quick example text to build on the card title and make up the bulk of
     the card's content.
   </Card.Text>
   <Button variant="primary">Learn more..</Button>
 </Card.Body>
</Card>

       
       </CardGroup>
      
       </div>

     </section>


     <section className='content' >
     <div >
     <Container >
   <Row className=''>
    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>
    <Col>
    <img src={img2}
    className = 'img'
    />
    </Col>
    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>

    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>
    

  </Row>
  <Row className=''>
    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>
    <Col>
    <img src={img2}
    className = 'img'
    />
    </Col>
    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>

    <Col>
    <img src={img1}
    className = 'img'
    />
    </Col>
    

  </Row>
</Container>

     </div>
     </section>


     <section className='mission_statement' >
      
       <Card  className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '100' }}>
 
 <Card.Body>
  
   <Card.Text>
    showcase one
   </Card.Text>
  
 </Card.Body>
</Card>
<Card  className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '100' }}>
 <Card.Body>
   <Card.Text>
    showcase two
   </Card.Text>
 </Card.Body>
</Card>

<Card  className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '100' }}>
 <Card.Body>
   <Card.Text>
    showcase three
   </Card.Text>
 </Card.Body>
</Card>


<div className='contain_btn'>
<Button className='btn' size="lg" variant="btn btn-outline-light" >Learn more</Button>{

}
</div>



  </section>


        <section className='content'>
          <h1 className='text-center'> 
          
            Ready to get started ? <br/>
            Contact Us

          </h1>
          <Button className='btn' size="lg" variant="outline-primary" >Contact Us</Button>{

}

        </section>



        <footer className=' footer  ' >

         <p>2021 © REgeneration Energy  <br/>
         All rights reserved
         </p>

         <div className='d-grid gap-3' >
         <a src = ''  href="#"> Home </a>
         <a src = '' href="#"> About us</a>
         <a src = ''href="#" > contact</a>
         </div>

         <div className='d-grid gap-3' >
         <a src = ''  href="#"> Twitter </a>
         <a src = ''href="#" > Linkedin</a>
         </div>

         <div className='d-grid gap-3' >
         <a src = '' href="#" > Privacy Policy </a>
         <a src = ''  href="#"> Terms Of service</a>
         </div>
         
        
        
        </footer>
          
    </>
  )
}