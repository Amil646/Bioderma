import sekil2 from  '../photos/img41.png'
import sekil21 from  '../photos/image12.png'
import Discount from '../components/discount.js'
import Detailed from '../components/detailed.js'
import '../css/actions.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default  function Aksiyalar(argument) {
	return(
<>
    < div  className="container justify-content-center"  id="actionscon1">
        <h5 className="actionsh"> Aksiyalar və kompaniyalar</h5>
    </div>
     <div className="container justify-content-center" id="actioncon2">
      <div className="row "  id="actionsr1" >

        <div className="col-4"   id="actionsc11"  >
           <Discount/>
        </div>

        <div className="col-4"  id="actionsc12"  >
           <Discount/>
        </div>

        <div className="col-4"  id="actionsc13"  >
           <Discount/>
        </div>

      </div>
    </div>
    <br/>

    <div className="container justify-content-center" id="actioncon3">
      <div className="row " id="actionsr2">
     
        <div className="col-3"   id="actionsc21">
           <Detailed/>
        </div>

        <div className="col-2"    id="actionsc22">
           <Detailed/> 
        </div>

        <div className="col-2"   id="actionsc23">
           <Detailed/>
        </div>
      </div>
    </div>
   <br/>
   <br/>
    <div className="container justify-content-center" id="actioncon4">
      <div className="row " id="actionsr3" >
        <div className="col-4"   id="actionsc31">
           <Discount/>
        </div>

      <div className="col-4"  id="actionsc32">
         <Discount/>
      </div>
  
      <div className="col-4"  id="actionsc33">
         <Discount/>
      </div>

    </div>
  </div>
    <br/>

  <div className="container justify-content-center" id="actioncon5">
    <div className="row " id="actionsr4">
      <div className="col-3" id="actionsc41">
         <Detailed/> 
      </div>

      <div className="col-2" id="actionsc42">
         <Detailed/>
      </div>

      <div className="col-2" id="actionsc43">
         <Detailed/>
      </div>
    </div>
  </div>
</>
    )
}
