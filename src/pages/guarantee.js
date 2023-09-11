import '../css/guarantee.css'
import Payment from '../components/payment.js'
import Delivery from '../components/delivery.js'
import {useState} from 'react'

export default  function Conditions(argument) {
	   
 const [click1,setClick1]= useState(true);
 const mouseClick1 = ()   => { 
    setClick1(true)
    setClick2(false)
    document.getElementById("x").style.backgroundColor="rgba(0, 155, 199, 1)"
    document.getElementById("x").style.color="rgba(252, 252, 253, 1)"
    document.getElementById("x").style.border="none"
    document.getElementById("y").style.backgroundColor="white"
    document.getElementById("y").style.color="rgba(53, 57, 69, 1)"
    document.getElementById("y").style.border="1px solid rgba(53, 57, 69, 1)"
   }

 const [click2,setClick2]= useState(false)
 const mouseClick2 = ()   => {
    setClick2(true)
    setClick1(false)
    document.getElementById("x").style.backgroundColor="white"
    document.getElementById("x").style.color="rgba(53, 57, 69, 1)"
    document.getElementById("x").style.border="1px solid rgba(53, 57, 69, 1)"
    document.getElementById("y").style.backgroundColor="rgba(0, 155, 199, 1)"
    document.getElementById("y").style.color="rgba(252, 252, 253, 1)"
    document.getElementById("y").style.border="none"
    };  
     
return(

<div  className="container justify-content-center" style={{minWidth:"1300px",}} >
 <div className="guaranteediv" >
  <div className="guaranteediv2" >  
        <button className="guaranteebtn" onClick={mouseClick1}  id="x">Çatdırılma</button>
        <button  className="guaranteebtn2" onClick={mouseClick2} id="y">Ödəniş</button>
  </div>
        {click1 && <Payment />}
        {click2 && <Delivery/>}
 </div>
 <br/><br/><br/>
</div>
	)
}