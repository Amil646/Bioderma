  import '../css/results.css'
export default function Results(props) {
  	return(
    <div className="card-borderless"  id="resultscard">
       <div className="resultsdiv" ><img src={props.src} className="resultsi" /></div>
       <div className="card-body">
         <p className="card-title  text-muted"   id="resultsp1"  >Make-up removal</p>
         <h5 className="card-text"   id="resultsp2">Sensio Micellar water, 1 l</h5><br/>
         <p className="card-text" id="resultsp3" >14.00 AZN</p>
        </div>
    </div>
    )
}