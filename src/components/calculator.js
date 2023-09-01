 import {useState} from 'react'
function Application(argument) {
	const [reqem,setReqem]=useState(0)
	const Artir=() =>{
		setReqem(reqem+1)
	};
	const Azalt=() =>{
		if (reqem>0){
		setReqem(reqem-1)
		}
		
	};
	return(
		<div style={{width:"100px",height:"45px",backgroundColor:"",textAlign:"center",
		paddingTop:"5px",borderRadius:"4px",border:"1px solid rgba(155, 155, 155, 1)"}}>
	    <button type="button"   onClick={Azalt} style={{width:"24px",height:"24px",border:"none",fontSize:"20px",
	    background:"none",paddingRight:"10px",color:"rgba(155, 155, 155, 1)",marginTop:"-20px"}}>-</button>
	 {reqem}
		   <button type="button" onClick={Artir} style={{width:"24px",height:"24px",border:"none",fontSize:"20px",
		   background:"none",color:"rgba(155, 155, 155, 1)"}}>+</button>
		
		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


		</div>
		)
} 
export default Application;