export default function Certificate(props){
const arr1=props.arr
const over=() =>{
document.getElementById(arr1[0]).style.backgroundColor="rgba(0, 155, 199, 1)"  ;
document.getElementById(arr1[1]).style.color="white"  ;
document.getElementById(arr1[2]).style.color="white"  ;
}
const out=() =>{
document.getElementById(arr1[0]).style.background="none"  ;
document.getElementById(arr1[1]).style.color="rgba(107, 114, 128, 1)"  ;
document.getElementById(arr1[2]).style.color="rgba(17, 24, 39, 1)"  ;
}
    console.log(arr1)

return(
	<div className="col-4 "  id={arr1[0]} onMouseOver={over} onMouseOut={out} onClick={props.onClick}  >
       <p  id={arr1[1]} >Serifikat</p>
       <p id={arr1[2]}  >Lorem ipsum</p>
    </div>
	)
}
