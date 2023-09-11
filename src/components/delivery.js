import '../css/guarantee.css'
import List  from '../components/guarantee-list.js'

export default  function Delivery(argument) {
return(
	<>
	<div className="guaranteed">
  	<ul  className="guaranteeu" >
     <List id="1" text=" Çatdırılma zamanı ödəniş" /> 
     <List id="2" text="Onlayn ödəniş" /> 
     <List id="3" text="Label"/>
     
    </ul>
    <br/>
  </div>
</>
	)
}