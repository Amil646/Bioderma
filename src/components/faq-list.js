import {useState,useEffect} from 'react'
import Text from './faq-text.js'
import '../css/faq.css'

export default function List(props) {
  const [color, setColor] = useState("rgba(119, 126, 144, 1")
  const change = color1 => {
    setColor(color1)
   }
 useEffect(() => {
    document.getElementById(props.id).style.color = color}, [color])

 const [click,setClick]= useState(false);
 const mouseClick = ()   => { 
    (!click) ? setClick(true):  setClick(false) 
     };

return(
   <li    onClick={mouseClick} onMouseOver={() => change("rgba(55, 114, 255, 1)")} onMouseOut={() => change("rgba(119, 126, 144, 1")} >
       <p className="faqp" id={props.id}>{props.number}</p><p  className="faqp2">  {props.text}  </p>  
        { click && ( <Text/> )}

    </li>
    )
}