import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
	const text={ fontFamily: "Poppins",
fontSize: "16px",
fontWeight: "500",
lineHeight: "20px",
letterSpacing: "0em",
color: "#FFFFFF",
textAlign:"right",
paddingTop:"10px",
position:"relative",
};
const row={
  height: "40px" ,
  position:"flex",
  width:"1250px",
 backgroundColor:"rgba(107, 172, 200, 1)",
  }
  ;
const number={paddingTop:"10px",
   color:"#FFFFFF",
   fontFamily: "Poppins",
fontSize: "16px",
fontWeight: "500",
lineHeight: "20px",
letterSpacing: "0em",backgroundColor:"yellow",
textAlign:"right"};
return(

	<>

	   <div className="container-fluid" style={{backgroundColor:"rgba(107, 172, 200, 1)",minWidth:"1300px",height:"40px"}}   >
    
<ul class="nav justify-content-center" >
<li class="nav-item " style={{marginLeft:"350px",paddingTop:"10px",fontFamily: "Poppins",
fontSize: "16px",
fontWeight: "500",
lineHeight: "20px",
letterSpacing: "0em",
color: "#FFFFFF",}}>
 Bioderma, Institut Esthederm ve Etat Pur rəsmi satış saytıdır.
  </li>
  <li class="nav-item " style={{marginLeft:"270px",paddingTop:"10px",
   color:"#FFFFFF",
   fontFamily: "Poppins",
fontSize: "16px",
fontWeight: "500",
lineHeight: "20px",
letterSpacing: "0em",}}>
 +994 12 123 4567
  </li>
  </ul>
    
        </div>

 
	
	</>)

}
export default Header;