 import '../css/routine.css'
 export default function Routines(props) {
 return(
	<div className="card-borderless" id="rcard">
     <div className="rdiv" >
      <img src={props.src} className="rimg "   />
     </div>
     <div className="card-body">
     <br/>
     <h5 className="card-text">{props.text}</h5>
     <br/> 
        <p className="card-text" id="rp">Dəri tipinə uyğun təmizləyicilər</p>
        <a href="/mehsullar" className="btn" id="ra" >Kəşf et</a>
     </div>
    </div>
	)
}