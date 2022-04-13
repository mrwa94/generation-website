import React , {useEffect} from 'react'
import Footer from './Footer'
import video from './video/Dummy.MP4'
import img1 from './images/dapp.jpg'
import img2 from './images/digital_financing.jpg'
import money from './images/money.jpg'
import trust from './images/trust.jpg'
import plan from './images/Hydrogen2.JPG'
import SECURITY from './images/digital_transparency.jpg'
import company from './images/company.jpg'




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




<section className='row   section_color  text-color'>
<div className='col padding  text-center '>
<h2 className=''>THE REgeneration DAPP</h2>
<p className=''>
  Click here to edit this<br/> paragraph and add your<br/> own content. This is a great <br/>place to expand on the title <br/>and any relevant details or <br/>information.
  </p>

</div>

<div className='col ' >
<img src ={ img2} 
 width= '720'
 height='700'
  
 />
</div>
</section>





<section className='row   sec_color '>
<div className='col '>
<img src ={ money} 
 width= '720'
 height='720'
 />

</div>
<div className='col padding text-center  text-color '>
<h2 className=''>
FAST TRANSACTIONS <br/>
& LOW FEES</h2>
<p className='padding_2'>
Settle Energy Payments in Minutes,<br/> not Days.   </p>

<p className='padding_2'>
With Solana, each transaction is secure<br/> and is processed almost instantly.   </p>

</div>
</section>





<section className='row '>
<div className='col padding  text-center '>
<h2 className=''>
CREATE TRUST IN A TRUSTLESS <br/>ENVIRONMENT</h2>
<p className='padding_2'>
Smart Contracts Provide Instant<br/> Escrow Services, Traceability and <br/>Auditability </p>
<p>Our Smart Contracts allow all parties to <br/>trade securely and confidently. No<br/> more confusing paperwork.</p>

</div>

<div className='col ' >
<img src ={ trust} 
 width= '720'
 height='725'
  
 />
</div>
</section>





<section className='row  text-color  sec_color '>
<div className='col '>
<img src ={ plan} 
 width= '720'
 height='720'
 />

</div>
<div className='col padding text-center'>
<h2 className=''>REAL-TIME INFORMATION</h2>
<p className='padding_2'>
End to End Transparency - From <br/> Auction to Delivery. </p>
<p>
Manage your transactions easily with <br/> just a few clicks. Keep track of your<br/> resources every step of the way. Know <br/>exactly when your purchases will reach<br/> you.
</p>
</div>
</section>



<section className='row   section_color  text-color'>
<div className='col padding  text-center '>
<h2 className=''>TADVANCED CYBER SECURITY</h2>
<p className='padding_2'>
I'm a paragraph. Click here to add your<br/> own text and edit me. It’s easy. Just <br/>click “Edit Text” or double click me to<br/> add your own content and make <br/> changes to the font. I’m a great place<br/> for you to tell a story and let your users<br/> know a little more about you.
  </p>

</div>

<div className='col ' >
<img src ={ SECURITY} 
 width= '720'
 height='700'
  
 />
</div>
</section>





<section className='row  section_color  text-color  '>
<div className='col '>
<img src ={ company} 
 width= '720'
 height='730'
 />

</div>
<div className='col padding text-center  '>
<h2 className=''>TBuy & Sell Hydrogen Resources<br/> Available Now or in the Future</h2>
<p className='padding_2'>
I'm a paragraph. Click here to add your<br/> own text and edit me. It’s easy. Just <br/>click “Edit Text” or double click me to<br/> add your own content and make <br/> changes to the font. I’m a great place<br/> for you to tell a story and let your users<br/> know a little more about you.
  </p>

</div>
</section>






















    
  
    <Footer/>
    </div>
  )
}

export default App_d