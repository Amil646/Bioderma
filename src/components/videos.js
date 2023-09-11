import '../css/videos.css'
 import sekil3  from'../photos/hekim.png'

export default function Videos(props) {
 const number= [props.id]
   const over=() =>{
   document.getElementById(number).style.backgroundColor="rgba(0, 155, 199, 1)"  ;
   document.getElementById(number).style.color="white"  ;
    }
     const out=() =>{
   document.getElementById(number).style.backgroundColor="rgba(238, 238, 238, 1)"  ;
   document.getElementById(number).style.color="rgba(117, 117, 117, 1)"  ;
    }

	return(
	<>
  	<div className="card" id="vcard1">
     <div className="vcarddiv" >
      <img src={sekil3} className="vcardi"  />
     </div> 
     <div className="card-body">
      <h5 className="vcardh"> Let's Change Beauty</h5>  
      <p className="card-title  text-muted"   id="vcardp" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p><br/>
      <a href="/blog"  target=".blank" className="btn"  id={props.id} onMouseOver={over} onMouseOut={out}> Videoya bax</a>
     </div>
    </div>

 </> )
}