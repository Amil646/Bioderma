import Choose from '../components/choose.js'
import sekil41 from  '../photos/img 1.png'
import sekil42 from  '../photos/img 2.png'
import sekil43 from  '../photos/img 3.png'
import sekil44 from  '../photos/img 4.png'
import '../css/choose.css'

export default function Harvests2(argument) {
    return(
<div className="row"  id="harvestsr">
    <div className="col-3" >
      <Choose id="5" src={sekil41}/>
    </div>
   
    <div className="col-3" id="harvestsc1">
        <Choose id="6" src={sekil42}/>
    </div>

    <div className="col-3" id="harvestsc2" >
         <Choose id="7" src={sekil43}/>
    </div>

    <div className="col-3" id="harvestsc3" >
        <Choose id="8" src={sekil44}/>
    </div> 
</div>
)
}