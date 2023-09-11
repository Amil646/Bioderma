  import icon1 from '../photos/Icon5.png'
  import '../css/choose.css'
export default function Choose(props) {
    const number=[props.id]
    const over=() =>{
document.getElementById(number).style.backgroundColor="#54B4D3"  ;
document.getElementById(number).style.color="white"  ;

    }
     const out=() =>{
document.getElementById(number).style.backgroundColor="white"  ;
document.getElementById(number).style.color="rgba(0, 155, 199, 1)"  ;

    }

  	return(
    <div className="card-borderless"  id="choosecard" >
       <div className="choosediv" ><img src={props.src} className="choosei" /></div>
       <div className="choosed" ><p className="choosep" >Pulsuz çatdırılma</p></div>
       <div className="choosed2" ><p className="choosep">Çox satılan</p></div>
       <div className="card-body">
         <p className="card-title  text-muted"     style={{ textAlign:"left"}} >Bioderma</p>
         <h5 className="card-text"   id="choosep2">Sensio Micellar water, 1 l</h5><br/>
         <p className="card-text" id="choosep3" >14.00 AZN</p>
         <a href="/mehsul" className="choosea1" id={props.id} onMouseOver={over} onMouseOut={out}>Səbətə at<img  src={icon1}  className="chooseicon" /></a>  
       </div>
    </div>
)
}