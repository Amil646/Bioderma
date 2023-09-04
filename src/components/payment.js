 import icon from  '../sekil/Iconss.png'
import {useState,useEffect} from 'react'
import Text from './guarantee-text.js'
export default  function Payment(argument) {
  const stil={width:"28px",height:"28px",borderRadius:"90px",backgroundColor:"rgba(238, 238, 238, 1)",border:"none",
                position:"absolute",marginLeft:"545px",marginTop:"-35px"}

  const [klik,setKlik]= useState(false);
    const [klik2,setKlik2]= useState(false);
  const [klik3,setKlik3]= useState(false);
  const [klik4,setKlik4]= useState(false);

    const [border,setBorder]= useState("1px solid rgba(238, 238, 238, 1)");
        const [height,setHeight]= useState("83px");


 const mouseClick = ()   => { 
   (!klik) ?setKlik(true) : setKlik(false)
      if (!klik) {
          document.getElementById("1").style.height="150px"

   document.getElementById("1").style.border="1px solid rgba(0, 155, 199, 1)"
      }
      else{
        document.getElementById("1").style.height=height

   document.getElementById("1").style.border=border

      }
     
   } ;
const mouseClick2 = ()   => { 
   (!klik2) ?setKlik2(true) : setKlik2(false)
      if (!klik2) {
          document.getElementById("2").style.height="150px"

   document.getElementById("2").style.border="1px solid rgba(0, 155, 199, 1)"
      }
      else{
        document.getElementById("2").style.height=height

   document.getElementById("2").style.border=border

      }
     
   } ;
const mouseClick3 = ()   => { 
   (!klik3) ?setKlik3(true) : setKlik3(false)
      if (!klik3) {
          document.getElementById("3").style.height="150px"

   document.getElementById("3").style.border="1px solid rgba(0, 155, 199, 1)"
      }
      else{
        document.getElementById("3").style.height=height

   document.getElementById("3").style.border=border

      }
     
   } ;
const mouseClick4 = ()   => { 
   (!klik4) ?setKlik4(true) : setKlik4(false)
      if (!klik4) {
          document.getElementById("4").style.height="150px"

   document.getElementById("4").style.border="1px solid rgba(0, 155, 199, 1)"
      }
      else{
        document.getElementById("4").style.height=height

   document.getElementById("4").style.border=border

      }
     
   } ;

    

    
              
  
return(

  <>
  <div style={{width:"250px",height:"302px",position:"relative",}}>
  <ul style={{listStyle:"none",textAlign:"left",marginLeft:"100px",marginTop:"-5px",position:"relative", }}>

 <li  id="1" style={{width:"596px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)"}} onClick={mouseClick}>
 <h5 style={{fontFamily: "Poppins",width:"145px",height: "24px",lineHeight: "24px",fontSize: "16px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"30px"}} >  Mağazadan götür</h5>       
 
<div style={stil}>
<img src={icon} height="12px" width="12px" style={{marginLeft:"9px"}}/>

</div>
{ klik && <Text/>
}
 </li> 

 


 <li   id="2" style={{width:"596px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"10px"}} onClick={mouseClick2}>
 <h5 style={{fontFamily: "Poppins",width:"151px",height: "24px",lineHeight: "24px",fontSize: "16px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"30px"}}> Ünvana çatdırılma</h5> 
                   
<div style={stil}>
<img src={icon} height="12px" width="12px" style={{marginLeft:"9px"}}/>
</div>
{ klik2 && <Text/>
}
 </li> 

  <li  id="3"  style={{width:"596px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"10px"}} onClick={mouseClick3}>
 <h5 style={{fontFamily: "Poppins",width:"129px",height: "24px",lineHeight: "24px",fontSize: "16px",fontWeight:"500",
                                      color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"30px"}}> Təcili çatdırılma</h5>

<div style={stil}>
<img src={icon} height="12px" width="12px" style={{marginLeft:"9px"}}/>
</div>
{ klik3 && <Text/>
}
 </li> 

 <li   id="4"  style={{width:"596px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"10px"}}onClick={mouseClick4}>
 <h5 style={{fontFamily: "Poppins",width:"43px",height: "24px",lineHeight: "24px",fontSize: "16px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"20px",marginTop:"30px"}}> Label</h5>
                   
<div style={stil}>
<img src={icon} height="12px" width="12px" style={{marginLeft:"9px"}}/>
</div>
{ klik4 && <Text/>
}
 </li>




   </ul>
<br/>
   </div>
  </>



  )
}
