import '../css/videos.css'
import Videos from '../components/videos.js'
import Pagination from '../components/pagination.js'
 export default function Doctors(argument) {
   
	return(
		 	<>
<br/><br/>
      < div  className="container justify-content-center" id="doctorcon1" >
        <h5 className="doctorh">  Həkim çıxışları</h5>
      </div>  

      <div className="container justify-content-center"  style={{minWidth: "1300px"}}>
        <div className="row" id="doctor1">
           <div className="col-3" >
            <Videos id="1"/>
           </div>

           <div className="col-3" id="video2"  >
            <Videos id="2"/>
           </div>

           <div className="col-3" id="video3" >
            <Videos id="3"/>
           </div>

           <div className="col-3" id="video4" >
            <Videos id="4"/>
           </div>

       </div>
        <br/><br/>


       <div className="row" id="doctor1">
          <div className="col-3" >
           <Videos id="5"/>
          </div>

          <div className="col-3" id="video6" >
           <Videos id="6"/>
          </div>

          <div className="col-3" id="video7"  >
           <Videos id="7" />
          </div>

          <div className="col-3" id="video8" >
           <Videos id="8"/>
          </div>

        </div>
        <div className="row justify-content-center" id="doctorr" >
		  <Pagination/>
        </div>
</div>
<br/><br/><br/><br/><br/>
</>

		)
}