import image from '../sekil/img44.png'
import image1 from '../sekil/img 2.png'
import image2 from '../sekil/img 1.png'
import image3 from '../sekil/img 3.png'
import image4 from '../sekil/img 4.png'

import icon1 from '../sekil/Icon55.png'
import icon2 from '../sekil/Icon4.png'
import icon3 from '../sekil/iconl.png'

import icon from '../sekil/icon100.png'
import icon51 from '../sekil/Icon51.png'
import zoom from '../sekil/zoom.png'


import Usage from '../components/usage.js'
import Application from  '../components/calculator.js'
import Information from '../components/information.js'
import {useState} from 'react'


export default  function Mehsul(argument) {
		const stil={height:"78px",width:"79px",backgroundColor:"rgba(238, 238, 238, 1)",borderRadius:"4px",border:"none",
          marginLeft:"-32px",marginTop:"20px"}
		


         
	    const [klik1,setKlik1]= useState(true);
 
 const mouseClick1 = ()   => { 
    setKlik1(true)
    setKlik2(false)
     document.getElementById("x").style.color="rgba(0, 155, 199, 1)"
     document.getElementById("x").style.borderBottom="1px  solid rgba(0, 155, 199, 1)"
     document.getElementById("x").style.fontWeight="500"
  document.getElementById("y").style.color="rgba(155, 155, 155, 1)"
  document.getElementById("y").style.borderBottom="none"
  document.getElementById("y").style.fontWeight="400"


   
   }


     const [klik2,setKlik2]= useState(false)
          const [klikk,setKlikk]= useState(true)
          const [listKlik,setListKlik]= useState(true)
      const [listKlik2,setListKlik2]= useState(false)
            const [listKlik3,setListKlik3]= useState(false)
      const [listKlik4,setListKlik4]= useState(false)



   const mouseClick2 = ()   => {
              setKlik2(true)
              setKlik1(false)
              document.getElementById("x").style.color="rgba(155, 155, 155, 1)"
              document.getElementById("x").style.borderBottom="none"
              document.getElementById("x").style.fontWeight="400"
          document.getElementById("y").style.color="rgba(0, 155, 199, 1)"
          document.getElementById("y").style.borderBottom="1px  solid rgba(0, 155, 199, 1)"
          document.getElementById("y").style.fontWeight="500"


        
     };  

      const click1 = ()   => {
              setListKlik(true)
             setListKlik2(false)
             setListKlik3(false)
             setListKlik4(false)

          
     };
     const click3 = ()   => {
              setListKlik3(true)
               setListKlik2(false)
             setListKlik(false)
             setListKlik4(false)
          
     };
     const click4 = ()   => {
              setListKlik4(true)
               setListKlik2(false)
             setListKlik3(false)
             setListKlik(false)
          
     };
      const click2 = ()   => {
              setListKlik2(true)
            setListKlik(false)
             setListKlik3(false)
             setListKlik4(false)          
     };   
      const list = ()   => {
document.getElementById("li1").style.border="1px solid rgba(107, 172, 200, 1)"
        
     }; 
     const listOut = ()   => {
document.getElementById("li1").style.border="none"
        
     };  
      const list2 = ()   => {
document.getElementById("li2").style.border="1px solid rgba(107, 172, 200, 1)"
        
     }; 
     const listOut2 = ()   => {
document.getElementById("li2").style.border="none"
        
     };  
      const list3 = ()   => {
document.getElementById("li3").style.border="1px solid rgba(107, 172, 200, 1)"
        
     }; 
     const listOut3 = ()   => {
document.getElementById("li3").style.border="none"
        
     };  
      const list4 = ()   => {
document.getElementById("li4").style.border="1px solid rgba(107, 172, 200, 1)"
        
     }; 
     const listOut4 = ()   => {
document.getElementById("li4").style.border="none"
        
     };  
      const change = ()   => {
setKlikk(false);              
               
     };  
      const change1 = ()   => {
setKlikk(true);              
               
     };
     const [over,setOver]= useState(false)
const mouseOver = ()   => {
setOver(true);              
               
     };
const mouseOut = ()   => {
setOver(false);              
               
     };


	return(
		<>
		<div  className="container justify-content-start" style={{minWidth:"1300px",}} >
       
		<div className="row">
		<div className="col-1"> 
		<ul style={{marginLeft:"45px",listStyle:"none"}}>
<li  onClick={click1} style={stil} id="li1" onMouseOver={list} onMouseOut={listOut}><img src={image1} height="58px" width="22px" style={{marginTop:"10px"}}/></li>
<li style={stil}  onClick={click2} id="li2" onMouseOver={list2} onMouseOut={listOut2}    ><img src={image2} height="58px" width="22px" style={{marginTop:"10px"}}/></li>
<li style={stil} onClick={click3} id="li3" onMouseOver={list3} onMouseOut={listOut3}><img src={image3} height="58px" width="22px" style={{marginTop:"10px"}}/></li>
<li style={stil} id="li4"  onClick={click4} onMouseOver={list4} onMouseOut={listOut4}><img src={image4} height="58px" width="22px" style={{marginTop:"10px"}}/></li>

</ul>
</div>

<div className="col-3" style={{height:"372px",width:"476px",backgroundColor:"rgba(238, 238, 238, 1)",marginLeft:"40px",marginTop:"20px",borderRadius:"10px",border:"none"}}>
<div style={{height:"26px",width:"87px",backgroundColor:"rgba(0, 155, 199, 1)",borderRadius:"4px",border:"none",fontFamily: "Poppins",
lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(255, 255, 255, 1)",letterSpacing: "0em",textAlign:"center",marginTop:"10px",padding:"4px"}}>Çox satılan
</div  >
<div style={{height:"370px",width:"474px",marginLeft:"-10px",marginTop:"-37px",borderRadius:"4px"}}  className="over" onMouseOver={mouseOver} onMouseOut={mouseOut}  >
{listKlik && <img src={image1} height="214px" width="78px"   style={{marginTop:"90px"}}/>}
{listKlik2 && <img src={image2} height="214px" width="78px"   style={{marginTop:"90px"}}/>}
{listKlik3 && <img src={image3} height="214px" width="78px"   style={{marginTop:"90px"}}/>}
{listKlik4 && <img src={image4} height="214px" width="78px"   style={{marginTop:"90px"}}/>}


{over &&
<img src={zoom} height="50px" width="65px"  style={{marginTop:"160px",marginLeft:"-70px",position:"absolute",backgroundColor:""}}/>


}</div>
</div>
<div className="col-3 " style={{height:"372px",width:"377px",marginLeft:"20px",marginTop:"20px",}}>
<ul  style={{listStyle:"none"}}>
<li ><p style={{height:"20px",width:"80px",fontFamily: "Poppins",lineHeight: "20px",fontSize: "16px",fontWeight:"600",color:"rgba(117, 117, 117, 1)",
letterSpacing: "0em",textAlign:"left",marginLeft:"-40px"}}>Bioderma</p></li>
<li ><p style={{height:"22px",width:"309px",fontFamily: "Poppins",lineHeight: "22px",fontSize: "18px",fontWeight:"600",color:"rgba(0, 0, 0, 1)",
letterSpacing: "0em",textAlign:"left",marginLeft:"-40px"}}>Sensibio Micellar water, 1 l, 500 ml</p></li>
<li ><p style={{height:"92px",width:"372px",fontFamily: "Poppins",lineHeight: "18px",fontSize: "12px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",
letterSpacing: "0em",textAlign:"left",marginLeft:"-40px"}}>Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə və kiri dərhal təmizləyən nəmləmdirici təsirə 
malik dünyanın №1 miselyar suyu. Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə və kiri dərhal təmizləyən nəmləmdirici 
təsirə malik dünyanın №1 miselyar suyu.</p></li>
<li >
<p style={{color: "rgba(155, 155, 155, 1)",fontFamily: 'Poppins',fontStyle: "normal",fontSize: "14px",
  lineHeight: "18px", fontWeight: "400",textDecoration:"line-through",position:"absolute",marginLeft:"-40px",marginTop:"-5px"}}>20.00 AZN </p> 
    <b style={{textDecoration:"none",lineHeight:"21px",fontFamily: 'Poppins',width:"100px",
  fontStyle:"bold",fontWeight: "500",fontSize: "18px",color:"black",marginLeft:"-120px",marginTop:"-7px",position:"absolute"}}>14.00 AZN</b> 
  </li>
<li  style={{marginTop:"50px",marginLeft:"-40px"}}>
  <Application/>
  <button className="btn" style={{ height:"45px", width: "278px", fontFamily: "Poppins", fontSize: "18px",
            fontWeight: "400",backgroundColor:"rgba(0, 155, 199, 1)",color:"white",marginLeft:"-50px",marginTop:"-45px",position:"absolute"}}>
     Səbətə at<img  src={icon1} height="24px "   width="24px "      style={{marginLeft: "10px" }}/></button>

  </li >

</ul>

</div>
<div className="col-2" style={{marginTop:"20px"}}>
{ klikk && 
<>
<button    onClick={change} style={{width:"28px",height:"28px",borderRadius:"4px",border:"1px solid rgba(186, 189, 195, 1)",marginLeft:"0px",position:"absolute",backgroundColor:"white"}}>
<img src={icon2} height="14px" width="16px" />
</button> 
</>}
{!klikk && 
<>
<button    onClick={change1} style={{width:"28px",height:"28px",borderRadius:"4px",border:"1px solid rgba(186, 189, 195, 1)",marginLeft:"0px",position:"absolute",backgroundColor:"white"}}>
<img src={icon51} height="18px" width="20px" style={{paddingRight:"2px"}} /> 
</button> 
</>

}

<button style={{width:"86px",height:"28px",borderRadius:"4px",border:"1px solid rgba(186, 189, 195, 1)",fontFamily: "Poppins", fontSize: "14px",
            fontWeight: "400",color:"rgba(186, 189, 195, 1)",marginTop:"-1px",marginLeft:"50px",padding:"4px",position:"absolute",backgroundColor:"white"}}>
            <img src={icon3} height="14px" width="14px" /> Paylaş
</button>

</div>
		<div className="row justify-content-center">
		<div style={{width:"289px",height:"37px",}}>
		<p  style={{width:"94px",height:"20px",color:"rgba(0, 155, 199, 1)",fontFamily: "Poppins", fontSize: "16px",fontWeight: "500",lineHeight:"20px",borderBottom:"1px  solid rgba(0, 155, 199, 1)", }} id="x" onClick={mouseClick1}> Məlumatlar</p>
		<p  style={{width:"128px",height:"20px",color:"rgba(155, 155, 155, 1)",fontFamily: "Poppins", fontSize: "16px",fontWeight: "400",lineHeight:"20px",marginLeft:"110px",marginTop:"-36px"}} id="y" onClick={mouseClick2}> İstifadə qaydası</p>
		</div>
		<hr   style={{width:"1170px",marginLeft:"-10px"}}/>
</div>
</div>
 {klik1 && <Information />}
                {klik2 && <Usage/>}
</div>


<br/><br/><br/>

</>

		)
}