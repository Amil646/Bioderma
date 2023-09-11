import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css'
function Header() {
return(
<>
  <div className="container-fluid" id="headercon" >
   <ul class="nav justify-content-center" >
     <li class="nav-item " id="htext"  >
      Bioderma, Institut Esthederm ve Etat Pur rəsmi satış saytıdır.
     </li>
     <li class="nav-item " id="hnumber" >
      +994 12 123 4567
     </li>
   </ul>
  </div>
</>
 )
}
export default Header;
