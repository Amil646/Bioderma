import '../css/guarantee.css'
import List  from '../components/guarantee-list.js' 
export default  function Payment(argument) {
return(
<>
 <div  className="guaranteed">
  <ul  className="guaranteeu">
     <List id="1" text=" Çatdırılma zamanı ödəniş" /> 
     <List id="2" text="Ünvana çatdırılma" /> 
     <List id="3" text="Təcili çatdırılma" /> 
     <List id="4" text="Label"/>
   </ul>
   <br/>
  </div>
</>
  )
}
