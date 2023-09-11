import '../css/article.css'
export default function Article(props) {
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
  	<div className="card" id="card1">
     <div className="carddiv" >
      <img src={props.src} className="cardi"  />
     </div> 
     <div className="card-body">
      <h5 className="cardh"> Let's Change Beauty</h5>  
      <p className="card-title  text-muted"   id="cardp" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p><br/>
      <a href="/blog"  target=".blank" className="btn"  id={props.id} onMouseOver={over} onMouseOut={out}> Ətraflı</a>
     </div>
    </div>
 </> )
}