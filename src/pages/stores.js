import Baki from '../components/baki.js'
import Region from '../components/region.js'
import {useState} from 'react'
import '../css/index.css'

export default  function Store(argument) {
	   


         
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

<div  className="container justify-content-start" style={{minWidth:"1300px",}} >
<div style={{width:"290px",height:"400px",marginBottom:"50px",marginLeft:"50px",borderRadius:"10px",border:"1px solid rgba(238, 238, 238, 1)",overflowY:"scroll",  overflowX: "hidden"}}>
 <h5 style={{fontFamily: "Poppins",width:"186px",height: "21px",lineHeight: "21px",fontSize: "20px",fontWeight:"600",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"20px"}}> Mağaza və ünvanlar</h5>

 <div style={{marginTop:"-20px",marginLeft:"-5px"}}>  
                  <button  style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"rgba(0, 155, 199, 1)",
             border:"none",width:"115px",height:"28px",lineHeight: "16px",fontSize: "12px",fontWeight:"600",color:"rgba(252, 252, 253, 1)",
             letterSpacing: "0em",textAlign:"center", marginLeft:"10px",marginTop:"30px", marginBottom:"30px"}}  onClick={mouseClick1}  id="x">Bakı üzrə</button>

        <button  style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"1px solid rgba(53, 57, 69, 1)",width:"115px",
        height:"28px",lineHeight: "16px",fontSize: "12px",fontWeight:"600",color:"rgba(53, 57, 69, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"20px",marginTop:"30px",
        marginBottom:"30px"}}   onClick={mouseClick2} id="y">Region üzrə</button>
 </div>
         {klik1 && <Baki />}
                {klik2 && <Region/>}
</div>
</div>
	)
}