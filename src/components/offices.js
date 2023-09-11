import icon from  '../photos/icons.png'
import '../css/office.css';

export default function Office(argument) {
 return(
<>
 	<p className="p1" > Baş ofis</p>
  <p className="p2" > Bakı, Əhməd Rəcəbli 1/9</p>
  <p className="p3" >B.ertəsi-Cümə 09:00-18:00</p>
  <div  className="div1">
   <img src={icon} height="12px" width="12px" className="p" />
  </div>
</>
 )
}

