import React , {useEffect} from 'react'
import Footer from './Footer'
import video from './video/Dummy.MP4'
import img1 from './images/dapp.jpg'
import img2 from './images/contracts.jpg'
import img3 from './images/trading.jpg'
import Aos from 'aos';

import { Card ,Button,CardGroup } from 'react-bootstrap'

const App_d = () => {


  useEffect( () => {
    Aos.init();

} , [])


  return (
    <div >
      
  <div className=' padding sec_color text-color'>
    <p className='size_font text-center'>The REgeneration<br/> Marketplace</p>
    <div className='text-center'>
    < img src = {img1}></img>
    </div>
   
</div>

<div className='section_color'>
<div>
  <h2>THE REgeneration DAPP</h2>

</div>



</div>








    
  
    <Footer/>
    </div>
  )
}

export default App_d