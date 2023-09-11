    import img3 from  '../photos/img 3.png'
    import sekil9 from  '../photos/image40.png'
    import '../css/caption.css'

export default function Caption(argument) {
	return(   
      <div className="caption1" >
        <div  className="caption2"> 
         <img  src={img3} height="235px"  width="180px"/>
        </div>

        <img src={sekil9}    className="captioni"/>
        <div className="caption3"> MEGA DISCOUNT OF THE MONTH <br/>
         <hr className="chr" /><br/>
         <p   className="captionp" >UP TO <b>30%</b> OFF</p> <br/><br/><br/>
         <p className="caption4">Make-up removal</p>
         <p className="caption5">Sensibio Micellar water, 1 l</p>
        </div>
      </div>
)
}
