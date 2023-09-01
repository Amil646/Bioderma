
import Payment from '../components/payment.js'
import Delivery from '../components/delivery.js'
import {useState} from 'react'
import '../css/index.css'

export default  function Conditions(argument) {
	   
	    const [klik1,setKlik1]= useState(true);
 
 const mouseClick1 = ()   => { 
    setKlik1(true)
    setKlik2(false)
     document.getElementById("x").style.backgroundColor="rgba(0, 155, 199, 1)"
    document.getElementById("x").style.color="rgba(252, 252, 253, 1)"
document.getElementById("x").style.border="none"
  document.getElementById("y").style.backgroundColor="white"
     document.getElementById("y").style.color="rgba(53, 57, 69, 1)"
      document.getElementById("y").style.border="1px solid rgba(53, 57, 69, 1)"

   }


     const [klik2,setKlik2]= useState(false)
   const mouseClick2 = ()   => {
              setKlik2(true)
              setKlik1(false)
   document.getElementById("x").style.backgroundColor="white"
    document.getElementById("x").style.color="rgba(53, 57, 69, 1)"
  document.getElementById("x").style.border="1px solid rgba(53, 57, 69, 1)"
          document.getElementById("y").style.backgroundColor="rgba(0, 155, 199, 1)"
          document.getElementById("y").style.color="rgba(252, 252, 253, 1)"
          document.getElementById("y").style.border="none"
     };  
     
return(

<div  className="container justify-content-center" style={{minWidth:"1300px",}} >
<div style={{width:"636px",height:"448px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",textAlign:"center",marginLeft:"320px",overflow:"hidden",overflowY:"scroll"}}>
 <div style={{marginTop:"-10px",marginLeft:"-5px"}}>  
                  <button  style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"rgba(0, 155, 199, 1)",
             border:"none",width:"150px",height:"28px",lineHeight: "16px",fontSize: "12px",fontWeight:"600",color:"rgba(252, 252, 253, 1)",
             letterSpacing: "0em",textAlign:"center", marginLeft:"10px",marginTop:"30px", marginBottom:"30px"}}  onClick={mouseClick1}  id="x">Çatdırılma</button>

        <button  style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"1px solid rgba(53, 57, 69, 1)",width:"150px",
        height:"28px",lineHeight: "16px",fontSize: "12px",fontWeight:"600",color:"rgba(53, 57, 69, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"20px",marginTop:"30px",
        marginBottom:"30px"}}   onClick={mouseClick2} id="y">Ödəniş</button>
 </div>
         {klik1 && <Payment />}
                {klik2 && <Delivery/>}
</div>
<br/><br/><br/>
</div>
	)

}