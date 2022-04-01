import React , {useEffect}  from 'react'
import { useNavigate } from "react-router-dom"
import { Container , Row ,Col ,Card ,Button ,CardGroup, CardImg} from 'react-bootstrap'


import video from './video/Dummy.MP4'
import img1 from './images/energy payments.jpg'
import img2 from './images/Evenergy.JPG'
import img3 from './images/Hydrogen.jpeg'
import img4 from './images/Hydrogen2.JPG'
import img5 from './images/digital_transparency.jpg'
import img6 from './images/digital_financing.jpg'
import Footer from './Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'


export const Home = () => {


        let navigate = useNavigate(); 
        const routeChange = () =>{ 
          let path="/App_d"; 
          navigate(path);
        }

        let navigate2 = useNavigate();
        const routeChange2 = () => {
          let path= "/Buyer";
          navigate(path);
        }
        let navigate3 = useNavigate();
        const routeChange3 = () => {
          let path = "/Siller";
          navigate(path);
        }
        let navigate4 = useNavigate();
        const routeChange4 = () => {
          let path = "/Contact";
          navigate(path);
        }

      useEffect( () => {
          Aos.init();

      } , [])

  return (
      <>

   <div> 
   <section >
    
     <div className='text-color'
    data-aos="fade-up"
 data-aos-duration="3000">
    <h3  className='mt-3 padding'>Our Mission </h3>
    <p className='mt-3 padding'>
    "At REgeneration Energy, we understand the critical role Hydrogen and other new energy resources play for our future energy needs.<br/> 
    We provide end-to-end digital blockchain-based services for new energy ecosystems, bringing the energy industry into the Web 3.0 era.<br/>

    </p>

    </div>
    <div 
    data-aos="fade-up"
 data-aos-duration="3000"
 className='text-center content ' > 

    <h3  className='mt-3  '>Our goals?</h3>

<p className='mt-3 padding'>
To democratize energy, making it accessible for all stakeholders involved and reducing barriers to entry 

To decentralize energy, <br/>
so that we can do away with one homogenous marketplace and instead create localized clusters that make sense for their regions. <br/>

To drive affordability, providing digital services, sustainable financing and localized markets to projects and purchasers. <br/>
Thus accelerating ecosystem growth.

To demonstrate transparency and efficacy,in an industry that is usually driven by secrecy and slower <br/>technological uptake.
in an industry that is usually driven by secrecy and slower <br/> technological uptake.To 
decouple new energy industries like Hydrogen from traditional financial and trading systems via Web 3.0 <br/>

At REgeneration, we believe in a better tomorrow, fueled by abundant energy resources that can be utilized by all."


</p>



     </div>
     </section>

     <section >
     <div className='content'>
  
    <h3 className='mt-3' > Why REgeneration?</h3>
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

     <section className=''>
       <div
       className='card  '>
       <CardGroup className=' my-4  mx-4  mission_statement '> 
       
       <Card data-aos="fade-up"
     data-aos-duration="3000"
        className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '20rem' }}>
       <Card.Img className='rounded ' variant="top" src={img3} />
 <Card.Body>
 
   <Card.Title>Siller</Card.Title>
   
  
   <Button variant="primary"
   onClick={routeChange3}
   >Learn more..</Button>
 </Card.Body>
</Card>
<Card  data-aos="fade-up"
     data-aos-duration="3000"
 className='card_contaner text-center my-4 mx-4  '      style={{ width: '20rem' }}>
<Card.Img className='rounded ' variant="top" src={img4} />

 <Card.Body>
   <Card.Title>Buyer</Card.Title>
   
   <Button 
   onClick={routeChange2}
   variant="primary">Learn more..</Button>
 </Card.Body>
</Card>

       
       </CardGroup>
      
       </div>

     </section>


     <section 
     data-aos="fade-up"
     data-aos-duration="3000"
     className='content' >
     <div  >
         <h3 className='text-center mt-3'>Our Partners</h3>
     <Container >
   <Row className='text-center'>
    <Col>
           <a  href="https://evenergy.network/">
           <img 
            src={img2} 
          
            >
              </img></a>
    </Col>

  </Row>
</Container>

     </div>
     </section>

     
     <section className='mission_statement text-center' >
       
     <h1 className='mt-3 text-color'>The REgen Difference</h1>
         <CardGroup>
         <Card 
         data-aos="fade-up"
         data-aos-duration="3000"
          className=' card_contaner2  my-4 mx-4 '  >
         <Card.Img 
            className='img-thumbnail showcase '
             variant="top" src={img1} />
      <Card.Body>
        <Card.Text>
        Settle Energy Payments in Minutes, not Days
        </Card.Text>
       
      </Card.Body>
     </Card>
     <Card 
     data-aos="fade-up"
     data-aos-duration="3000"
      className=' card_contaner2  my-3 mx-3  '  >
     <Card.Img 
            className='img-thumbnail showcase '
             variant="top" src={img5} />   
      <Card.Body>
        <Card.Text>
        End to End Transparency - From Auction to Delivery
        </Card.Text>
       
      </Card.Body>
     </Card>
     
     <Card 
     data-aos="fade-up"
     data-aos-duration="3000"
      className=' card_contaner2  my-3 mx-3 '  >
     <Card.Img 
            className='img-thumbnail showcase '
             variant="top" src={img6} />  
      <Card.Body>
        <Card.Text>
        Financing Options in Markets with Limited Instruments
        </Card.Text>
       
      </Card.Body>
     </Card>
         </CardGroup>
   


<div className='contain_btn'>
<Button className='btn' size="lg"
 variant="btn btn-outline-light"
 onClick={routeChange}
 >
 Learn more</Button>
   
</div>



  </section>


        <section className='content'>
        
          <h1 className='text-center mt-3'
           data-aos="fade-up"
           data-aos-duration="3000"
          > 
          
            Ready to get started ? <br/>
            Contact Us

          </h1>
          <Button
           data-aos="fade-up"
           data-aos-duration="3000" className='btn' size="lg"
          onClick={routeChange4}
           variant="outline-primary" >Contact Us</Button>

        </section>

     <Footer/>

       
   </div>
        
      
    </>
  )
}
