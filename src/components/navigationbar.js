 import 'bootstrap/dist/css/bootstrap.min.css';
  import React from 'react'
 import resm1 from '../sekil/image 1.png'
 import resm2 from '../sekil/image 6.png'
 import resm3 from '../sekil/image 7.png'
 import resm4 from '../sekil/image 8.png'
 import resm6 from '../sekil/Icon4.png'
  import resm from '../sekil/Icon2.png'
import resm7 from '../sekil/Icon3.png'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react'
function Navbar(){

  const [sebet,setSebet]=useState(true)



 


  const stil={paddingLeft:"15px",color: "rgba(68, 74, 81, 1)", fontFamily: "Poppins", fontSize: "16px",lineHeight: "24px", fontWeight: "400", width: "277px",
height: "36px",borderRadius: "4px",border: "1px solid rgba(199, 202, 206, 1)",marginTop:"5px",background:"none"}
  return(
 <div className="container-fluid mt-3" style={{height:"68px",borderBottom:"1px solid black"}}>


<ul class="nav justify-content-center ">
  <li class="nav-item " style={{marginTop:"-35px" ,marginLeft:"-20px ",marginRight: "65px",paddingRight:"5px",position:"flex",}}>
    <a class="nav-link" href="/"><img src={resm2}  width={"177px"} height={"80px"} style={{marginTop:"10px"}}/></a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="/brendler" style={{marginRight: "30px",position:"flex",}}><img src={resm1}  width={"107px"} height={"25px"} /></a>
  </li>
  <li class="nav-item  ">
    <a class="nav-link" href="/brendler" style={{marginRight: "30px",position:"flex",}}><img src={resm3}  width={"75px"} height={"27px"}/ ></a>
  </li>
  <li class="nav-item  ">
    <a href="/brendler" class="nav-link " style={{marginRight: "30px",position:"flex",background:"none"}}><img src={resm4} width={"97px"} height={"19px"} /></a>
  </li>
       <li class="nav-item " >
    <form class="example" action="/axtaris" >
  <input type="text" placeholder="Axtar" name="axtaris" style={stil}/>
  <button type="submit" style={{background:"none",border:"none",position:"absolute",marginLeft:"-40px",marginTop:"8px"}} > <img style={{width:"20px",height:"20px"}}  src={resm}/></button>
<br/><br/><br/>
</form>


  </li>
    <li class="nav-item mt-2"  style={{marginLeft:"-5px"}}>
          <a class="nav-link" href="/beyenilenler"  >
  <img src={resm6} width={"18px"} height={"15,36px"}  style={{  marginTop:"-10px"}}/></a>
        </li>
           <li class="nav-item mt-2 "  style={{marginLeft:"-5px"}}>
         {(sebet) && <a class="nav-link" href="/sebet"  >
           <img src={resm7} width={"17.33px"}   height={"19.5px"}  style={{  marginTop:"-10px"}}/>
             <div style={{width:"18px",height:"18px",borderRadius:"90px",border:"none",backgroundColor:"rgba(107, 172, 200, 1)",textDecoration:"none",color:"black",marginTop:"-32px",marginLeft:"8px",position:"absolute",paddingBottom:"10px"}}>
                       <p style={{marginTop:"-2px"}}>  2</p>   
                             </div>
             </a>}
             {(!sebet) && <a class="nav-link" href="/sebet-bosdur"  >
           <img src={resm7} width={"17.33px"}   height={"19.5px"}  style={{  marginTop:"-10px"}}/>
             <div style={{width:"18px",height:"18px",borderRadius:"90px",border:"none",backgroundColor:"rgba(107, 172, 200, 1)",textDecoration:"none",color:"black",marginTop:"-32px",marginLeft:"8px",position:"absolute",paddingBottom:"10px"}}>
                       <p style={{marginTop:"-2px"}}> 0</p>   
                             </div>
             </a>}

        </li>
      <li class="nav-item mt-2 " style={{marginLeft:"-5px"}}>
          <a class="nav-link" href="#"  >
                <p style={{ fontFamily: "Poppins",
                           fontSize: "16px",
                           fontWeight: "400",
                           lineHeight: "20px",
                           letterSpacing: "0em",
                           textAlign: "left",
                          color: "rgba(68, 74, 81, 1)",
                          borderRight: "1px solid  #ECEFF2",
                          paddingRight: "15px",
                        position:"flex",
                      }}  >AZ</p></a>
        </li>


     <li class="nav-item mt-2"  >
          <a class="nav-link" href="#"  >
  <p style={{ fontFamily: "Poppins",
                           fontSize: "16px",
                           fontWeight: "400",
                           lineHeight: "20px",
                           letterSpacing: "0em",
                           textAlign: "left",
                          textDecoration: "none",
                          color: "rgba(68, 74, 81, 1)",
                marginLeft: "-20px",
                position:"flex",
                          color: "black"}}>EN</p></a>
        </li>
</ul>
</div>
)
}
export default Navbar;
