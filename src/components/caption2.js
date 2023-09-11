import sekil1 from  '../photos/image11.png'
import sekil12 from  '../photos/img44.png'
import '../css/caption2.css'
 export default function Caption2(argument) {
	return(
	<div className="col-8  mb-5">  
        <a href="/mehsullar" className="caption2a"> 
          <img src={sekil1}  className="caption2i"/>
          <div  className="caption2d" >
           <p>Ləkəyə qarşı <br/>
           <b>Parlaqladıcı</b> qayğı:  <b className="caption2b">Pigmentbio</b></p>
          </div>
        </a>
        <img src={sekil12} className="caption2im" height="253px" width="106.29px"/>
    </div>)
}
