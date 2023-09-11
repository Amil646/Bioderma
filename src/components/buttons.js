import wp from '../photos/wpicon.png'
import chat from '../photos/icon123.png'
import frame from '../photos/frame111.png'
import {useRef} from 'react'
import '../css/button.css'

export default  function Buttons(argument) {

const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
  };

	return(
 < div  className="container justify-content-end" style={{minWidth:"1300px"}}>

		<div className="div1">
		<ul className="ul1">
      <li><a href="#"><img src={wp} alt="3" className="list1" /></a></li>
      <li><a href="#"><img src={chat} alt="3" className="list1"/></a></li>
      <li  ref={bottomEl} onClick={scrollToBottom}><a href="#" className="list1"><img src={frame} alt="3" width="40px" height="40x" /></a></li>
		</ul>
		</div>
	</div>

		)
}