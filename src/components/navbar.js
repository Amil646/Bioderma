 import 'bootstrap/dist/css/bootstrap.min.css';
 import sekil1 from  '../photos/img51.png'
import sekil2 from  '../photos/img52.png'
import sekil3 from  '../photos/img53.png'
import sekil4 from  '../photos/img54.png'
import '../css/navbar.css'
export default function Body(){
  
  return(
<>
 <div className="container-fluid" id="navbarcon" >
    
  <ul class="nav justify-content-center" >
   <li class="nav-item " id="navbarli1" ><img src={sekil1} className="navbarimg"/></li>

   <li class="nav-item " id="navbarli2" >
     <span className="span">Səhiyyə mütəxəssisləri ilə <br/>40 illik iş təcrübəsi</span> </li>

   <li><div  className="navbard1"></div></li>

   <li class="nav-item "   id="navbarli3"><img src={sekil2}  className="navbarimg"/></li>

   <li class="nav-item " id="navbarli4">
     <span className="span">Dəriyə dərin hörmət</span> </li>

   <li><div  className="navbard2"></div></li>

   <li class="nav-item " id="navbarli5" ><img src={sekil3}  className="navbarimg"/></li>

   <li class="nav-item " id="navbarli6" >
     <span className="span">Effektivlik və təhlükəsizlik tibbi <br/>
       nəzarət altında sınaqdan keçirilmişdir</span>
   </li>

    <li><div  className="navbard3"></div></li>

    <li class="nav-item" id="navbarli8"  ><img src={sekil4}  className="navbarimg"/></li>

    <li class="nav-item " id="navbarli7" >
       <span className="span">Səhiyyə mütəxəssisləri ilə <br/>40 illik iş təcrübəsi</span> 
    </li>

  </ul>
 </div>
</>
);
}
