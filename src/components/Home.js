import React , {useEffect}  from 'react'
import { useNavigate } from "react-router-dom"
import { Container , Row ,Col ,Card ,Button ,CardGroup, CardImg} from 'react-bootstrap'


import video from './video/video.webp'
import img1 from './images/energy payments.jpg'
import img2 from './images/Evenergy.jpg'
import img3 from './images/Hydrogen.jpeg'
import img4 from './images/contact.jpg'
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
   <section  className='padding text-center sec_color text-color'>
    <p className='size_font'>DEMOCRATIZING <br/>ENERGY </p>
    <h3 className=''>Creating Trust in a Trustless Environment</h3>
   </section>


   <section>
   <img 
    src={video}
    alt = "Your browser does not support the video tag."
    autoPlay
    loop
    muted
    >

    </img>

   </section>

   <section  className='padding text-center sec_color text-color'>
    <p className='size_font'>Our Mission </p>
    <h3 className=''>"At REgeneration Energy, we understand the critical <br/>
                     role Hydrogen and other new energy resources play <br/>
                     for our future energy needs. </h3>
    <h3 className=''>We provide end-to-end digital blockchain-based <br/>
                      services for new energy ecosystems, bringing the <br/>
                      energy industry into the Web 3.0 era." </h3>
   </section>

    
    <section className='section_color sec_postion'>
    <img src= {img1}
    width="50%" height="900" ></img>

  <div className=' text-color div_goals ' > 
   <h1 className=''>Our Goals?</h1>

   <ui>
    <li className='mt-3'>
    To democratize energy, making it <br/> accessible for all stakeholders involved  <br/> and reducing barriers to entry
    </li>
    <li  className='mt-3'>To decentralize energy, so that we can<br/> do away with one homogenous<br/> marketplace and instead create <br/> localized clusters that make sense for <br/> their regions.</li>
    <li  className='mt-3'> To drive affordability, providing digital<br/> services, sustainable financing and<br/> localized markets to projects and <br/> purchasers. Thus accelerating <br/> ecosystem growth.</li>
    <li  className='mt-3'> To demonstrate transparency and<br/> efficacy, in an industry that is usually<br/>driven by secrecy and slower <br/>technological uptake. </li>
    <li  className='mt-3'> To decouple new energy industries<br/> like Hydrogen from traditional<br/>financial and trading systems via Web <br/>3.0 </li>

​ </ui>

</div>
 </section>
 


 <section  className='padding text-center sec_color text-color'>
    <h3  data-aos="fade-up"
  >"At REgeneration, we believe in a better tomorrow,<br/> fueled by abundant energy resources that can be utilized by all." </h3>
   
   </section>





   <section className=' sec_postion'>
   <div className='  div_goals '> 
   <h1 className='size_font text center mt-3'>Decentralized Application</h1>

  <h3 className='mt-3'>I'm a paragraph. Click here to add your <br/>own text and edit me. It’s easy. Just click<br/> “Edit Text” or double click me to add<br/> your own content and make changes to<br/> the font. I’m a great place for you to tell <br/>a story and let your users know a little <br/>more about you.</h3>
  <div className='padding_2'>
  <Button className='bg_navbar '
   onClick={routeChange3}
   >Read more..</Button>

  </div>
 
</div>

<div>
<img src= {img2}
width="700"
 height="800" 
 ></img>
 
</div>
 </section>

   

 <section className='sec_color text-color sec_postion '>
    <img src= {img3}
    width="740" height="900" ></img>

  <div className='  div_goals padding_2   ' > 
   <h1 className='mt-3'>How it works</h1>
   <h3 className='padding_2 mt-3'>
    

I'm a paragraph. Click here to add your <br/> own text and edit me.
 It’s easy. Just click<br/> “Edit Text” or double click me to add<br/>  your
  own content and make changes to<br/>  the font. I’m a great place for you 
  to tell<br/>  a story and let your users know a little<br/>  more about you.

   </h3>

   <div className='padding_2'>
  <Button className='bg_navbar '
   onClick={routeChange3}
   >Read more..</Button>

  </div>

</div>
 </section>
 



 <section className='  sec_postion '>
  
  <div className='  div_goals padding_2   ' > 
   <h1 className='mt-3'>About Us</h1>
   <h3 className='padding_2 mt-3'>
    
   I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.

   </h3>

   <div className='padding_2'>
  <Button className='bg_navbar '
   onClick={routeChange3}
   >Read more..</Button>

  </div>

</div>

<img src= {img4}
    width="700" height="800" ></img>
 </section>
  





























     <img className='video'
    src={video}
    alt = "Your browser does not support the video tag."
    autoPlay
    loop
    muted
    >

    </img>

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
