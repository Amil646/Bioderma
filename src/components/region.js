import Offices from  './offices.js'
import '../css/office.css';

  export default function Region(argument) {
return(
<>
	<ul className="ul">
    <a href="#"  className="a">
     <li     className="list">
      <Offices/>
     </li>
    </a> 

    <a href="#"  className="a">
     <li   className="list">
      <Offices/>
     </li>
    </a> 
  </ul>
</>
 )
}

