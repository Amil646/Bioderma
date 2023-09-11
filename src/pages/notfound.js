import '../css/filter.css'
import {useState} from 'react'
import Navbar from '../components/filter-navbar.js'
function Notf(props) {
	return(
		<>
    < div  className="container justify-content-center"    id="filtercon2">
        <h5 className="filterh">FILTER</h5>
                <hr  className="filterhr"/>
    </div>

   <div className="container justify-content-center" id="filtercon3">
  <div className="row " id="filterrow4">
   <div className="col-3" id="filtercol" >
       <form id="form1" action="/filter-tapilmadi">
        <ul className="filterul" >
         <Navbar/>
    </ul>
   </form>
 </div>
    <div id="filterdiv4" className="col-7  mb-5" > 
    Axtardığınız söz üzrə heç bir nəticə tapılmadı. 
   </div>
  </div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</>
		)
}
export default Notf;