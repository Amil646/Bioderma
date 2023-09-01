 import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'
import General from '../components/general.js'
import Support from '../components/support.js'
import Hosting from '../components/hosting.js'
import Product from '../components/product.js'


 import {useState,useEffect} from 'react'



 export default function Faq(argument) {
 	const stil={textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"none",width:"81px",height:"28px",
        lineHeight: "16px",fontSize: "16px",fontWeight:"600",color:"rgba(119, 126, 144, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"10px",marginTop:"30px",marginBottom:"30px"};

          const [klik1,setKlik1]= useState(true)
 const mouseClick1 = ()   => { 
    setKlik1(true)

    setKlik2(false)
          setKlik3(false)
          setKlik4(false)
          document.getElementById("x").style.backgroundColor="rgba(53, 57, 69, 1)"
           document.getElementById("x").style.color="white"
     document.getElementById("y").style.backgroundColor="white"
     document.getElementById("y").style.color="rgba(119, 126, 144, 1)"
     document.getElementById("z").style.backgroundColor="white"
       document.getElementById("z").style.color="rgba(119, 126, 144, 1)"
     document.getElementById("t").style.backgroundColor="white"
     document.getElementById("t").style.color="rgba(119, 126, 144, 1)"
   }


     const [klik2,setKlik2]= useState(false)
   const mouseClick2 = ()   => {
              setKlik2(true)
setKlik1(false)
                    setKlik3(false)
                    setKlik4(false)
                    document.getElementById("x").style.backgroundColor="white"
          document.getElementById("x").style.color="rgba(119, 126, 144, 1)"
          document.getElementById("y").style.backgroundColor="rgba(53, 57, 69, 1)"
        document.getElementById("y").style.color="white"
            document.getElementById("z").style.backgroundColor="white"
            document.getElementById("z").style.color="rgba(119, 126, 144, 1)"
          document.getElementById("t").style.backgroundColor="white"
          document.getElementById("t").style.color="rgba(119, 126, 144, 1)"
     };  
     const [klik3,setKlik3]= useState(false)
   const mouseClick3 = ()   => { 
               
           setKlik3(true)
          setKlik2(false)
                setKlik1(false)
                setKlik4(false)
                 document.getElementById("z").style.backgroundColor="rgba(53, 57, 69, 1)"
                 document.getElementById("z").style.color="white"
         document.getElementById("y").style.backgroundColor="white"
      document.getElementById("y").style.color="rgba(119, 126, 144, 1)"
               document.getElementById("x").style.backgroundColor="white"
               document.getElementById("x").style.color="rgba(119, 126, 144, 1)"
               document.getElementById("t").style.backgroundColor="white"
               document.getElementById("t").style.color="rgba(119, 126, 144, 1)"
     };
     const [klik4,setKlik4]= useState(false)
   const mouseClick4 = ()   => { 
               setKlik4(true)
setKlik3(false)
                   setKlik2(false)
                   setKlik1(false)
                 document.getElementById("y").style.backgroundColor="white"
  document.getElementById("y").style.color="rgba(119, 126, 144, 1)"
         document.getElementById("x").style.backgroundColor="white"
         document.getElementById("x").style.color="rgba(119, 126, 144, 1)"
          document.getElementById("z").style.backgroundColor="white"
          document.getElementById("z").style.color="rgba(119, 126, 144, 1)"
          document.getElementById("t").style.backgroundColor="rgba(53, 57, 69, 1)"
         document.getElementById("t").style.color="white"
     };


return(
<>

<div  className="container justify-content-center" style={{width:"736px",height:"400px",marginBottom:"20px",}}  >
  <h1 style={{fontFamily: "Poppins",lineHeight: "56px",fontSize: "50px",fontWeight:"600",width:"736px",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"center"}}>Ən çox verilən suallar</h1>
          <Nav defaultActiveKey="/home" as="ul" style={{marginLeft:"180px"}}>
      <Nav.Item as="li">
        <button  style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"rgba(53, 57, 69, 1)",border:"none",width:"81px",height:"28px",
        lineHeight: "16px",fontSize: "16px",fontWeight:"600",color:"white",letterSpacing: "0em",textAlign:"center",marginLeft:"10px",marginTop:"30px",
        marginBottom:"30px"}} onClick={mouseClick1}  id="x">General</button>
      </Nav.Item>
      <Nav.Item as="li" >
        <button style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"none",width:"81px",height:"28px",
        lineHeight: "16px",fontSize: "16px",fontWeight:"600",color:"rgba(119, 126, 144, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"10px",marginTop:"30px",
        marginBottom:"30px"}} onClick={mouseClick2} id="y">Support</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"none",width:"81px",height:"28px",
        lineHeight: "16px",fontSize: "16px",fontWeight:"600",color:"rgba(119, 126, 144, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"10px",marginTop:"30px",
        marginBottom:"30px"}} onClick={mouseClick3} id="z">Hosting</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button style={{textDecoration:"none",fontFamily: "Poppins",borderRadius:"100px",backgroundColor:"white",border:"none",width:"81px",height:"28px",
        lineHeight: "16px",fontSize: "16px",fontWeight:"600",color:"rgba(119, 126, 144, 1)",letterSpacing: "0em",textAlign:"center",marginLeft:"10px",marginTop:"30px",
        marginBottom:"30px"}} onClick={mouseClick4} id="t">Product</button>
      </Nav.Item>
    </Nav>
     {klik1 && <General />}
                {klik2 && <Support/>}
                {klik3 && <Hosting/>}
                {klik4 &&  <Product/>}

  </div>
       <br/>

</>
	)
}