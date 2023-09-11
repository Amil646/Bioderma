import Text from './guarantee-text.js'
import icon from  '../photos/Iconss.png'
import {useState,useEffect} from 'react'
import '../css/guarantee.css'

function Image(argument) {
    return(
      <img src={icon} className="gimg"/>
    )
 }
 
export default function List(props) {
 const [click,setClick]= useState(false);
 const [border,setBorder]= useState("1px solid rgba(238, 238, 238, 1)");
 const [height,setHeight]= useState("83px");

 const mouseClick = ()   => { 
   (!click) ?setClick(true) : setClick(false)
      if (!click) {
        document.getElementById(props.id ).style.height="150px"
        document.getElementById(props.id ).style.border="1px solid rgba(0, 155, 199, 1)"
      }
      else{
        document.getElementById(props.id ).style.height=height
        document.getElementById(props.id ).style.border=border
      }
   } ;

return(
    <li  id={props.id} className="guaranteeli" onClick={mouseClick}>
      <h5 className="guaranteeh" > {props.text}</h5>                  
      <div className="gstyle">
       <Image/>
      </div>
        { click && <Text/>}
     </li> 
		)
}