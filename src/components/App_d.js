import React , {useEffect} from 'react'
import Footer from './Footer'
import video from './video/Dummy.MP4'
import img1 from './images/trust.jpg'
import img2 from './images/contracts.jpg'
import img3 from './images/trading.jpg'
import Aos from 'aos';

import { Card ,Button,CardGroup } from 'react-bootstrap'

const App_d = () => {


  useEffect( () => {
    Aos.init();

} , [])


  return (
    <div id='dapp_id'>
    <section  >
     <div className='content'
     data-aos="fade-up"
     data-aos-duration="3000"
     >
  
    <p>The REgeneration marketplace</p>
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

   
     <section
     
     className='mission_statement text-center' >
       
       <h1 className='text-color'>The REgen Difference</h1>
           <CardGroup>
           <Card  className=' card_contaner2  my-4 mx-4 ' 
           data-aos="fade-up"
           data-aos-duration="3000" >
           <Card.Img 
              className='img-thumbnail showcase '
               variant="top" src={img1} />
        <Card.Body>
          <Card.Text>
          Create trust in a trustless world
          </Card.Text>
         
        </Card.Body>
       </Card>
       <Card 
       data-aos="fade-up"
       data-aos-duration="3000"
        className=' card_contaner2  my-3 mx-3  '  >
       <Card.Img 
              className='img-thumbnail showcase '
               variant="top" src={img2} />   
        <Card.Body>
          <Card.Text>
          Smart Contracts Provide Instant Escrow Services, Traceability and Auditability
          </Card.Text>
         
        </Card.Body>
       </Card>
       
       <Card 
       data-aos="fade-up"
       data-aos-duration="3000"
        className=' card_contaner2  my-3 mx-3 '  >
       <Card.Img 
              className='img-thumbnail showcase '
               variant="top" src={img3} />  
        <Card.Body>
          <Card.Text>
          Buy & Sell Hydrogen Resources Available Now or in the Future
          </Card.Text>
         
        </Card.Body>
       </Card>
           </CardGroup>
     
    </section>
    
  
    <Footer/>
    </div>
  )
}

export default App_d