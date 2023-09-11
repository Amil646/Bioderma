import Nav from 'react-bootstrap/Nav';
import General from '../components/general.js'
import Support from '../components/support.js'
import Hosting from '../components/hosting.js'
import Product from '../components/product.js'
import {useState,useEffect} from 'react'
import "../css/faq.css"

export default function Faq(argument) {
 	
 const bgcolor2="white"
 const bgcolor1="rgba(53, 57, 69, 1)"
 const color1="white"
 const color2="rgba(119, 126, 144, 1)"
 const [click1,setClick1]= useState(true)
 const mouseClick1 = ()   => { 
     setClick1(true)
     setClick2(false)
     setClick3(false)
     setClick4(false) 
     document.getElementById("x").style.backgroundColor=bgcolor1
     document.getElementById("x").style.color=color1
     document.getElementById("y").style.backgroundColor=bgcolor2
     document.getElementById("y").style.color=color2
     document.getElementById("z").style.backgroundColor=bgcolor2
     document.getElementById("z").style.color=color2
     document.getElementById("t").style.backgroundColor=bgcolor2
     document.getElementById("t").style.color=color2
   }

const [click2,setClick2]= useState(false)
const mouseClick2 = ()   => {
     setClick2(true)
     setClick1(false)
     setClick3(false)
     setClick4(false)
     document.getElementById("x").style.backgroundColor=bgcolor2
     document.getElementById("x").style.color=color2
     document.getElementById("y").style.backgroundColor=bgcolor1
     document.getElementById("y").style.color=color1
     document.getElementById("z").style.backgroundColor=bgcolor2
     document.getElementById("z").style.color=color2
     document.getElementById("t").style.backgroundColor=bgcolor2
     document.getElementById("t").style.color=color2
     };  
const [click3,setClick3]= useState(false)
const mouseClick3 = ()   => { 
     setClick3(true)
     setClick1(false)
     setClick2(false)
     setClick4(false)
     document.getElementById("z").style.backgroundColor=bgcolor1
     document.getElementById("z").style.color=color1
     document.getElementById("y").style.backgroundColor=bgcolor2
     document.getElementById("y").style.color=color2
     document.getElementById("x").style.backgroundColor=bgcolor2
     document.getElementById("x").style.color=color2
     document.getElementById("t").style.backgroundColor=bgcolor2
     document.getElementById("t").style.color=color2
     };
const [click4,setClick4]= useState(false)
const mouseClick4 = ()   => { 
     setClick4(true)
     setClick1(false)
     setClick2(false)
     setClick1(false)
     document.getElementById("y").style.backgroundColor="white"
     document.getElementById("y").style.color=color2
     document.getElementById("x").style.backgroundColor="white"
     document.getElementById("x").style.color=color2
     document.getElementById("z").style.backgroundColor="white"
     document.getElementById("z").style.color=color2
     document.getElementById("t").style.backgroundColor=bgcolor1
     document.getElementById("t").style.color="white"
     };
return(
<>
 <div  className="container justify-content-center" id="faqdiv" >
    <h1 className="faqh" >Ən çox verilən suallar</h1>
    <Nav defaultActiveKey="/home" as="ul"  className="faqnav" >
      <Nav.Item as="li">
        <button className="faqactive" onClick={mouseClick1}  id="x">General</button>
      </Nav.Item>
      <Nav.Item as="li" >
        <button className="faqbtn" onClick={mouseClick2} id="y">Support</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button className="faqbtn"  onClick={mouseClick3} id="z">Hosting</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button className="faqbtn"  onClick={mouseClick4} id="t">Product</button>
      </Nav.Item>
    </Nav>
      {click1 && <General />}
      {click2 && <Support/>}
      {click3 && <Hosting/>}
      {click4 &&  <Product/>}

 </div>
    <br/>
</>
	)
}