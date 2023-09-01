import {useState,useEffect} from 'react'

 export default function Support(style) {
  const stip={position:"absolute",marginLeft:"-20px",fontFamily: "Poppins",lineHeight: "24px", fontSize: "16px",fontWeight:"500",color:"rgba(119, 126, 144, 1",
letterSpacing: "0em",}
   const styl={fontFamily: "Poppins",lineHeight: "24px", fontSize: "16px",fontWeight:"500",color:"rgba(35, 38, 47, 1)",
letterSpacing: "0em",width:"546px",height:"35px",marginLeft:"20px"}
const stir={marginTop:"-10px",width:"546px",marginLeft:"-20px"}
 const stil1={listStyle:"none",textAlign:"left",fontFamily: "Poppins",lineHeight: "21px",lineHeight: "24px",width:"465px",height:"144px", fontSize: "14px" ,
 fontWeight:"400",color:"rgba(119, 126, 144, 1)",  letterSpacing: "0em",marginTop:"15px",marginBottom:"-50px"}


     const [klik,setKlik]= useState(false);
 const mouseClick = ()   => { 
    (!klik) ? setKlik(true):  setKlik(false) 
     };

	 const [klik2,setKlik2]= useState(false);
 const mouseClick2 = ()   => { 
    (!klik2) ? setKlik2(true):  setKlik2(false) 
     };

    const [klik3,setKlik3]= useState(false);
 const mouseClick3 = ()   => { 
    (!klik3) ? setKlik3(true):  setKlik3(false) 
     };

     const [color, setColor] = useState("rgba(119, 126, 144, 1")
        const [color2, setColor2] = useState("rgba(119, 126, 144, 1")
        const [color3, setColor3] = useState("rgba(119, 126, 144, 1")

  const click = reng => {
    setColor(reng)
  }
  const click2 = reng => {
    setColor2(reng)
  }
  const click3 = reng => {
    setColor3(reng)
  }

  useEffect(() => {
    document.getElementById("reqem").style.color = color
  }, [color])

   useEffect(() => {
    document.getElementById("reqem2").style.color = color2
  }, [color2]) 
   useEffect(() => {
    document.getElementById("reqem3").style.color = color3
  }, [color3]) 
   

return(   
	<>
	<ul style={{listStyle:"none",textAlign:"left",fontFamily: "Poppins",width:"546px",height: "200px",lineHeight: "21px",
  fontSize: "10px",fontWeight:"400",color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",position:"absolute",marginLeft:"100px",marginTop:"30px",overflow:"hidden",overflowY:"scroll"}}>
 <li   onMouseOver={() => click("rgba(55, 114, 255, 1)")} onMouseOut={() => click("rgba(119, 126, 144, 1")} onClick={mouseClick}>
 <p style={stip} id="reqem">01</p><p   style={styl}> How can i set up a new website? </p>  
  { klik && ( <>
 <p  style={stil1}>Lorem Ipsum is simply
   dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled. </p> 
 </>
 )}
 <hr style={stir}/></li>
 <li   onMouseOver={() => click2("rgba(55, 114, 255, 1)")} onMouseOut={() => click2("rgba(119, 126, 144, 1")} onClick={mouseClick2} >
 <p style={stip} id="reqem2">02</p> <p style={styl} > How can i set up a new website?     </p>  
  { klik2 && ( <>
 <p  style={stil1}>Lorem Ipsum is simply
   dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled. </p> 
 </>
 )}
 <hr style={stir}/></li>
 <li   onMouseOver={() => click3("rgba(55, 114, 255, 1)")} onMouseOut={() => click3("rgba(119, 126, 144, 1")}  onClick={mouseClick3}>
  <p style={stip} id="reqem3">03</p><p  style={styl}> How can i set up a new website?    </p>  
  { klik3 && ( <>
 <p  style={stil1}>Lorem Ipsum is simply 
  dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
  printer took a galley of type and scrambled. </p> 
 </>
 )}
</li> 

   </ul>
	</>
	)
}