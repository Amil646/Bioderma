 import {useState} from 'react'
 import '../css/calculator.css'

function Application(argument) {
	const [number,setNumber]=useState(0)
	const Increase=() =>{
		setNumber(number+1)
	};
	const Decrease=() =>{
		if (number>0){
		setNumber(number-1)
		}
		
	};
	return(
		<div className="divc">
	      <button type="button"   onClick={Decrease} className="signs">-</button>
	          {number}
		  <button type="button" onClick={Increase} className="signs">+</button>
		
		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

		</div>
		)
} 
export default Application;