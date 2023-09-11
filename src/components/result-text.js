import '../css/result.css'
 export default function Text(props) {
	const number=[props.id]
	 const over = ()   => { 
     document.getElementById(number).style.color="rgba(107, 172, 200, 1)"
      document.getElementById(number).style.textDecoration=" underline"
     }
     const out = ()   => { 
     document.getElementById(number).style.color="rgba(0, 0, 0, 1)"
     document.getElementById(number).style.textDecoration=" none"
     }
   	return(
       <a href="#"  onMouseOver={over} onMouseOut={out}  id={props.id} className="text">{props.text}</a>
		)
}