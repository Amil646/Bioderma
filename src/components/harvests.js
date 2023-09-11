import Choose from '../components/choose.js'
import sekil41 from  '../photos/img 1.png'
import sekil42 from  '../photos/img 2.png'
import sekil43 from  '../photos/img 3.png'
import sekil44 from  '../photos/img 4.png'
import '../css/choose.css'

export default function Harvests(argument) {
	return(
<div className="row"  id="harvestsr">
    <div className="col-3" >
      <Choose id="1" src={sekil41}/>
    </div>
   
    <div className="col-3" id="harvestsc1">
        <Choose id="2" src={sekil42}/>
    </div>


    <div className="col-3" id="harvestsc2" >
         <Choose id="3" src={sekil43}/>
    </div>


    <div className="col-3" id="harvestsc3" >
        <Choose id="4" src={sekil44}/>
    </div> 
</div>
)
}