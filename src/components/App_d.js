import React from 'react'
import Footer from './Footer'
import video from './video/Dummy.MP4'
import { Card ,Button, CardImg } from 'react-bootstrap'

const App_d = () => {
  return (
    <div id='dapp_id'>
    <section >
     <div className='content'>
  
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

     <section className='mission_statement' >
      
       <Card  className=' card_contaner text-center  my-4 mx-3 '   style={{ width: '100' }}>
   <CardImg> </CardImg>
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <Footer/>
    </div>
  )
}

export default App_d