import wp from '../sekil/wpicon.png'
import chat from '../sekil/icon123.png'
import frame from '../sekil/frame111.png'
import {useRef} from 'react'

export default  function Buttons(argument) {
const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
  };

	return(
 < div  className="container justify-content-end"  style={{ minWidth:"1300px",}}>

		<div style={{ width:"84px",height:"140px",marginTop:"1000px",marginLeft:"1210px",position:"absolute",}}>
		<div >
		<ul style={{listStyle:"none",}}>
<li><a href="#"><img src={wp} alt="3" width="44px" height="44x" style={{ marginBottom:"5px"}}/></a></li>
<li><a href="#"><img src={chat} alt="3" width="44px" height="44x" style={{ marginBottom:"5px"}}/></a></li>
<li  ref={bottomEl} onClick={scrollToBottom}><a href="#"  style={{background:"none",border:"none"}}><img src={frame} alt="3" width="40px" height="40x" style={{ marginBottom:"5px"}}/></a></li>
		</ul></div></div>		</div>

		)
}