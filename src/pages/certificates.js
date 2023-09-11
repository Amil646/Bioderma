import {useState} from 'react'
import serifikat from '../photos/sertifikat.png'
import icon from '../photos/iconx.png'
import '../css/certificates.css'
import Certificate from '../components/certificate.js'

function Certificates(argument) {
  
 const [click,setClick]=useState(false)
 const click1=() =>{
    setClick(true)
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.25)" ;
    }
 const click2=() =>{
    setClick(false)
    document.body.style.backgroundColor="white";
    }
   
return(
		<>
 < div  className="container justify-content-center"  id="certificatescon1">
 {click && 
  <div className="certificatesdiv" >
    <img src={icon} className="certificatesimg"  onClick={click2} />
    <img src={serifikat} height="632px" width="446px" />
  </div>

 }
  <div className="row justify-content-center" id="certificatesrow" >

   <div className="col-4 " >
     <a href="#" className="btn active "target=".self"  id="certificates" >Uğur və sertifikatlar</a>
   </div>
   <div className="col-4" >               
     <a href="/brendler" className="btn active"   id="certificatesbrand"> Brendlər</a>
   </div>
   <div className="col-4" >  
     <a href="/haqqimizda" className="btn "  id="certificatesabout"> Şirkət haqqında</a> 
   </div>
   <br/>

  </div>
     <div className="row justify-content-center" id="certificatesrow1">
        <Certificate   onClick={click1}   arr={['certificatescol1', 'c12', 'c13']}  />
        <Certificate   onClick={click1}  arr={['certificatescol2', 'c22', 'c23']}  />
        <Certificate   onClick={click1}  arr={['certificatescol3', 'c32', 'c33']}  />
     </div>

     <div className="row justify-content-center" id="certificatesrow2">
        <Certificate  onClick={click1}  arr={['certificatescol4', 'c42', 'c43']}  />
        <Certificate  onClick={click1}   arr={['certificatescol5', 'c52', 'c53']}  />
        <Certificate  onClick={click1}   arr={['certificatescol6', 'c62', 'c63']}  />
    </div>
  </div>
    <br/><br/>
</>
		)
}
export default Certificates;