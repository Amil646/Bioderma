import Application from  '../components/calculator.js'
import frame from '../photos/Frame.png'
import icon from '../photos/iconx.png'
import '../css/basket.css'
export default function Product(props) {
	return(
		 <>
         <div className="col-4 text-start" id="basketc">
            <img src={frame} height="278px" width="278px"/>
         </div>
         <div className="col-4 text-start">
            <p className="basketp4">Bioderma</p>
            <button type="button" onClick={props.onClick}  className="removebtn"><img src={icon} height="32px" width="32px" /></button>
            <div className="basketdiv7"><b>Sensibio Micellar water, 1 l, 500 ml</b> 
            </div>
            <div  className="basketdiv71" >
                <p className="basketp5">Çox satılan</p></div><br/><br/><br/><br/>
            <div className="basketdiv72" >
            <p  className="basketp6">20.00 AZN </p> 
            <b  className="basketb">14.00 AZN</b> 
            <Application/>
            </div>
         </div>
         </>
		)
}