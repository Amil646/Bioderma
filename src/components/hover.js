import {useState} from 'react';
import Part from './hoverpage.js'

const Hover = () => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
 
  };

  const handleMouseOut = () => {
    setIsHovering(false);
   
  };


 const stil={marginLeft: "5px", color:"rgba(68, 74, 81, 1)",fontFamily: "Poppins",
fontSize: "13px",fontWeight: "600",lineHeight: "8px",letterSpacing: "0em",
textAlign: "Center",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",textAlign:"start",
};

  return (
    <div>

      <div>
      
  <div class="container-fluid"  style={{ height:"100px"}}>
<ul class="nav justify-content-center">
  <li class="nav-item" style={{marginLeft:"-10px",paddingRight:"10px"}}>


    <a class="nav-link "   href="/brendler"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}  >Brendlər və Məhsullar</a>

  </li>
  <li class="nav-item"style={{paddingRight:"10px"}} >
    <a class="nav-link" href="/mehsullar"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Üz qulluğu</a>
  </li>
  <li class="nav-item" style={{paddingRight:"10px"}}>
     <a class="nav-link" href="/mehsullar"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Bədən qulluğu</a>
  </li>
  <li class="nav-item"style={{paddingRight:"10px"}}>
    <a class="nav-link "  href="/mehsullar"  style={stil} onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >Günəş qoruyucuları</a>
  </li>
   <li class="nav-item"  style={{paddingRight:"10px"}}>
    <a class="nav-link " href="/mehsullar"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Gözəl yaş alma</a>
  </li>
   <li class="nav-item" style={{paddingRight:"10px"}}>
    <a class="nav-link " href="/mehsullar" style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Qulluq setləri</a>
  </li>
   <li class="nav-item" style={{paddingRight:"10px"}}>
    <a class="nav-link " href="/aksiyalar"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Aksiyalar və Kompaniyalar</a>
  </li>
   <li class="nav-item" style={{paddingRight:"10px"}}>
    <a class="nav-link " href="/haqqimizda" style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Haqqımızda</a>
  </li>
   <li class="nav-item" style={{paddingRight:"10px"}}>
    <a class="nav-link " href="/faydali"  style={stil}  onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut} >Faydalı</a>
  </li>

</ul>
<hr/>


</div>        

        {isHovering && (
       <Part onMouseOver={handleMouseOver}/>


        )}
      </div>
    </div>
  );
};

export default Hover;
