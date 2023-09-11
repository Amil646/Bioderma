import '../css/harvest.css'
export default function List(props) {
   const number=[props.id]
   const list = ()   => {
        document.getElementById(props.id).style.border="1px solid rgba(107, 172, 200, 1)"
     }; 
   const listOut = ()   => {
        document.getElementById(props.id).style.border="none"
      };    
    
return(
    <li className="harvestli" onClick={props.onClick} id={props.id} onMouseOver={list} onMouseOut={listOut}>
    <img src={props.src} className="harvestimg"/>
    </li>
  )
}