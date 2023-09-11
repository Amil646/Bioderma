import sekil3  from'../photos/Frame 1601.png'
import icon1 from '../photos/Icon5.png'
import sekil31 from'../photos/Frame 1601 (1).png'
import sekil32 from'../photos/Frame 1601 (2).png'
import sekil33  from'../photos/Frame 1601 (3).png'
import 'bootstrap/dist/css/bootstrap.min.css';
import sekil1 from  '../photos/image11.png'
import sekil12 from  '../photos/img44.png'
import sekil2 from  '../photos/img41.png'
import sekil21 from  '../photos/image12.png'
import Discount from '../components/discount.js'
import Harvests from '../components/harvests.js'
import '../css/action.css'

export default function Aksiya(argument) {
	return(
<>
  < div  className="container justify-content-center"  id="actioncon1" >
        <h5 className="actionh"> Aksiyalar və kompaniyalar</h5>
  </div>

  <div className="container justify-content-center" id="actioncon2">
   <div className="row " id="actiondr">
    <div className="col-4" id="actiondc">
     <Discount/>
    </div>

    <div className="col-7  mb-5"  id="actiond">  
     <p className="actionp">7 Dekabr - 1 Yanvar</p>
     <div className="actiondiv">
       <p >Yeni <b>Bioderma</b> məhsulunu <b className="actionb">30% Endirimlə</b> <br/>əldə et!</p>
     </div>
     <br/>

     <p className="actionp2">Həssas dərilər daxil bütün dəri tipləri üçün makiyajı,
        çirkə və kiri dərhal təmizləyən nəmləmdirici təsirə malik dünyanın №1 miselyar suyu.
        Həssas dərilər daxil bütün dəri tipləri üçün makiyajı, çirkə və kiri dərhal təmizləyən 
        nəmləmdirici təsirə malik dünyanın №1 miselyar suyu.</p><br/><br/>

     <div className="actiondiv2" >
       <div className="actiondiv21">
        <p className="actionp3" >    Onlayn sifariş üçün: </p>
        <b className="actionb2">*1234</b>
       </div>
       <div className="actiondiv3" >
        <p  className="actionp3" >WhatsApp: </p>
        <b className="actionb3">012 345 67 89</b>
       </div>
     </div>

   </div>
  </div>
</div>

 <br/>

 <div className="container justify-content-center" id="actioncon3">
  <Harvests/>
 </div>
 <br/>
</>
		)
}
 
