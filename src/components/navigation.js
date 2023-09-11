import resm1 from '../photos/image 1.png'
import resm2 from '../photos/image 6.png'
import resm3 from '../photos/image 7.png'
import resm4 from '../photos/image 8.png'
import resm6 from '../photos/Icon4.png'
import resm from '../photos/Icon2.png'
import resm7 from '../photos/Icon3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../css/navigation.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react'
export default function Navbar(){
  
  return(
<div className="container-fluid mt-3"  id="navi">

  <ul class="nav justify-content-center ">
   <li class="nav-item "  id="a" >
    <a class="nav-link" href="/"><img src={resm2} className="naviimg"/></a>
   </li>
   <li class="nav-item ">
    <a class="nav-link" href="/brendler" id="b" ><img src={resm1}   className="naviimg2" /></a>
   </li>
   <li class="nav-item  ">
    <a class="nav-link" href="/brendler"  id="c" ><img src={resm3}   className="naviimg3" /></a>
   </li>
   <li class="nav-item  ">
    <a href="/brendler" class="nav-link " id="d" ><img src={resm4}  className="naviimg4"/></a>
   </li>

   <li class="nav-item " >
    <form class="example" action="/axtaris"  >
     <input type="text" placeholder="Axtar" name="axtaris" className="naviinput"/>
     <button type="submit" className="navisub" > <img  src={resm} className="naviimg7"/></button>
     <br/><br/><br/>
    </form>
   </li>

   <li class="nav-item mt-2" id="e">
      <a class="nav-link" href="/beyenilenler"  ><img src={resm6} className="naviimg5"/></a>
   </li>

   <li class="nav-item mt-2 " id="f">
     <a class="nav-link" href="/sebet"  >
       <img src={resm7} className="naviimg5"/>
       <div className="navidiv"><p className="navip2">2</p></div>
     </a>
   </li>
   
   <li class="nav-item mt-2 " style={{marginLeft:"-5px"}}><a class="nav-link" href="#"><p className="navip">AZ</p></a></li>
   <li class="nav-item mt-2"><a class="nav-link" href="#"><p className="navip1">EN</p></a></li>
  </ul>
</div>
)
}
