import {useState} from 'react'
import icon1 from '../photos/Icon5.png' 
import '../css/filter.css'
import Choose2 from '../components/filter-choose.js'
import sekil41 from  '../photos/img 1.png'
import sekil42 from  '../photos/img 2.png'
import sekil43 from  '../photos/img 3.png'
import Navbar from '../components/filter-navbar.js'

function Filter(argument) {
 
	return(
	<>
    < div  className="container justify-content-center"  id="filtercon" >
        <h5 className="filterh">FILTER</h5>
        <hr className="filterhr"/>
    </div>

    <div className="container justify-content-center" id="filtercon1" >
     <div className="row " id="filterrow" >
      <div className="col-3" id="filtercol" >
       <form id="form1" action="/filter-tapilmadi">
        <ul className="filterul" >
        <Navbar/>
         <div style={{width:"280px",}}>
          <input type="reset" form="form1" key="flexCheckDefault" value="Sıfırla" className="filterinput3" />
          <input type="submit" form="form1" value="Tətbiq et" className="filterinput4" />
         </div>
       </ul>
     </form>
   </div>
   <div className="row   mb-5" id="filterrow2" > 
     <div className="col-3" >
      <Choose2 id="1" src={sekil42} />
     </div>
     <div className="col-3" id="filtercol1">
      <Choose2 id="2" src={sekil41} />
     </div>
     <div className="col-3"  id="filtercol2">
      <Choose2 id="3" src={sekil43} />
     </div>
    </div>
  </div>

    <div className="row  mb-5" id="filterrow3"> 
     <div className="col-3"  >
      <Choose2 id="4" src={sekil42} />
     </div>
     <div className="col-3"  id="filtercol4" >
      <Choose2 id="5" src={sekil41} />
     </div> 
     <div className="col-3"  id="filtercol3" >
      <Choose2 id="6" src={sekil43} />
     </div>
    </div>
</div>
   <br/><br/><br/>
</>
	)
}
export default Filter;