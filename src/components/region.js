  import Offices from  './offices.js'
  export default function Region(argument) {
return(<>	

	<ul style={{listStyle:"none",textAlign:"left",marginLeft:"100px",marginTop:"-5px",position:"absolute",}}>
  <a href="#"  style={{textDecoration:"none"}}>
  <li   style={{width:"250px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",}}>
<Offices/>
 </li> </a> 

  <a href="#"  style={{textDecoration:"none"}}>
  <li   style={{width:"250px",height:"83px",textAlign:"left",marginLeft:"-110px",borderRadius:"6px",border:"1px solid rgba(238, 238, 238, 1)",marginTop:"10px"}}>
<Offices/>
 </li> </a> 

   </ul>
	</>
)
}
