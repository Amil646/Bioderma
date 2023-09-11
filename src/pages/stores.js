import Baki from '../components/baku.js'
import Region from '../components/region.js'
import {useState} from 'react'
import '../css/office.css';

export default  function Store(argument) {

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

<div  className="container justify-content-start" style={{minWidth:"1300px",}} >
 <div className="officediv" >
  <h5 className="officeh"> Mağaza və ünvanlar</h5>
   <div className="officediv2"  >
    <button className="officebtn1" onClick={mouseClick1}  id="x"> Bakı üzrə</button>
    <button className="officebtn2" onClick={mouseClick2} id="y">Region üzrə</button>
   </div>
   {click1 && <Baki />}
   {click2 && <Region/>}
 </div>
</div>
	)
}
