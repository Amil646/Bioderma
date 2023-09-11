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

  return ( 
<>
  <div class="container-fluid"  id="container">
    <ul class="nav justify-content-center">
      <li class="nav-item" id="hoverli1" >
        <a class="nav-link "   href="/brendler"  id="hover1" onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}  >Brendlər və Məhsullar</a>
      </li>
      <li class="nav-item" id="hoverli2" >
         <a class="nav-link" href="/mehsullar"  id="hover2"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Üz qulluğu</a>
      </li>
      <li class="nav-item" id="hoverli3">
         <a class="nav-link" href="/mehsullar"  id="hover3" onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Bədən qulluğu</a>
      </li>
      <li class="nav-item"  id="hoverli4">
         <a class="nav-link "  href="/mehsullar"  id="hover4" onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut} >Günəş qoruyucuları</a>
      </li>
      <li class="nav-item"  id="hoverli5">
         <a class="nav-link " href="/mehsullar"  id="hover5"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Gözəl yaş alma</a>
      </li>
      <li class="nav-item" id="hoverli6">
         <a class="nav-link " href="/mehsullar" id="hover6"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Qulluq setləri</a>
      </li>
      <li class="nav-item" id="hoverli7">
          <a class="nav-link " href="/aksiyalar"  id="hover7"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Aksiyalar və Kompaniyalar</a>
      </li>
      <li class="nav-item" id="hoverli8">
          <a class="nav-link " href="/haqqimizda" id="hover8"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>Haqqımızda</a>
      </li>
      <li class="nav-item" id="hoverli9">
          <a class="nav-link " href="/faydali"  id="hover9"  onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut} >Faydalı</a>
      </li>

    </ul>
    <hr/>
  </div>        
  {isHovering && (<Part />)}
  
</>
      );
};

export default Hover;
