 import sekil2 from  '../sekil/img41.png'
  import sekil21 from  '../sekil/image12.png'
import Discount from '../components/discount.js'
import Discount2 from '../components/discount2.js'
import Detailed from '../components/detailed.js'


     import 'bootstrap/dist/css/bootstrap.min.css';

function Aksiyalar(argument) {
	return(
			<>
    < div  className="container justify-content-center"  style={{ minWidth:"1300px",marginBottom:"50px",}}>
        <h5 style={{fontFamily: "Poppins",width:"242px",height: "21px",lineHeight: "21px",fontSize: "18px",fontWeight:"500",
                    color:"rgba(0, 0, 0, 1)",letterSpacing: "0em",textAlign:"left",marginLeft:"45px"}}> Aksiyalar və kompaniyalar</h5>
    </div>


    <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"-85px"}}>

  <div className="col-4"    style={{marginLeft:"80px"}}>
   <Discount/>
    </div>

     <div className="col-4"   style={{marginLeft:"-45px"}} >
     <Discount/>

    </div>
     <div className="col-3" style={{marginLeft:"-20px"}}  >
       <Discount2/>

    </div>  
      </div>
    </div>
   
    <br/>
      <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"60px"}}>
 <div className="col-3"    style={{marginLeft:"10px"}}>
   <Detailed/>  </div>

              <div className="col-2"    style={{marginLeft:"155px"}}>
      <Detailed/> </div>

              <div className="col-2"    style={{marginLeft:"200px"}}>
   <Detailed/></div>
            </div>
    </div>
    <br/>
    <br/>

    <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"-85px"}}>
  <div className="col-4"    style={{marginLeft:"80px"}}>
    <Discount/>
 
    </div>
     <div className="col-4"   style={{marginLeft:"-45px"}} >
   <Discount/>
 
    </div>
     <div className="col-3" style={{marginLeft:"-20px"}}   >
       <Discount2/>
    </div>
    </div></div>
    
    <br/>
        <div className="container justify-content-center" style={{ minWidth:"1300px",width:"1300px",marginTop:"-20px",}}>
  <div className="row " style={{marginLeft:"60px"}}>
  <div className="col-3"    style={{marginLeft:"10px"}}>
    <Detailed/> </div>

              <div className="col-2"    style={{marginLeft:"155px"}}>
   <Detailed/> </div>

              <div className="col-2"    style={{marginLeft:"200px"}}>
   <Detailed/> </div>
            </div>
    </div>
<br/><br/><br/><br/><br/><br/>

    </>
    )
}
export default Aksiyalar;
