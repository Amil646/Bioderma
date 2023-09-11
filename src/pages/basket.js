import {useState} from 'react'
import icon1 from '../photos/Icon55.png'
import icon2 from '../photos/Icon51.png'
import icon from '../photos/iconx.png'
import car from '../photos/car.png'
import card from '../photos/card.png'
import icon33 from '../photos/perfect.png'
import Order from  '../components/order.js'
import '../css/basket.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../components/basket-product.js'
export default function Basket(argument) {

const [click11,setClick11]=useState(false)
const [click21,setClick21]=useState(false)
const [click31,setClick31]=useState(true)
const [click41,setClick41]=useState(true)

const click=() => {
    setClick11(true);
    document.body.style.backgroundColor="rgba(0, 0, 0, 0.15)"
  };
const click2=() => {
    setClick21(true);
    setClick11(false);
};
const mouseClick=() => {
    setClick11(false);
    document.body.style.backgroundColor="white"
};
const mouseClick2=() => {
    setClick21(false);
    document.body.style.backgroundColor="white"
};

const remove1=() => {
    setClick41(false);
    document.getElementById("basketr1").style.border="none"
};
const remove=() => {
    setClick31(false);
    document.getElementById("basketr").style.border="none"
};
return(
<> 
<div  className="container justify-content-center" id="basketcon">
    {click11 &&
      ( 
        <div className="basketdiv1" > 
          <div  className="container justify-content-center"  id="basketcon2">
           <div className="basketdiv2" > 
            <div className="row">
             <div className="col text-end">
              <button className="basketbutton" onClick={mouseClick}>
                <img src={icon} alt="btn" className="basketimg"/>
              </button> 
             </div>
            </div>
            <p className="basketp1"> Sifarişi rəsmiləşdir</p>
            <form className="basketform" >
                <input type="text" placeholder="Ad" className="basketinput1"/>
                <input type="text" placeholder="Soyad" className="basketinput1"/>
                <input type="tel" placeholder="Telefon nömrəsi" className="basketinput2"/>
                <input type="email" placeholder="example@gmail.com" className="basketinput1"/>
                <input type="text" placeholder="Şəhər" className="basketinput4"/>
                <input type="text" placeholder="Qeyd" className="basketinput3"/>
                <div className="basketdiv3"> 
                    <label  className="basketlabel"> Məhsulu əldə etmə üsulu</label><br/><br/>
                        <div className="basketdiv4">
                            <label htmLfor="car1" className="basketlabel1"><img src={car} className="basketimg2"/>Ünvana çatdırılsın</label>
                            <input type="radio" id="car1" name="car" className="basketradio"/>
                        </div>
                </div>
                <div className="basketdiv3"> 
                    <label className="basketlabel"> Ödəniş etmə üsulu</label><br/><br/>
                        <div className="basketdiv4">
                            <label htmLfor="car2" className="basketlabel1"><img src={car}  className="basketimg2"/>Çatdırılma zamanı nağd ödəniş et</label>
                            <input type="radio" id="car2" name="cars" className="basketradio"/>
                        </div>
                        <div className="basketdiv5">
                            <label htmLfor="car3" className="basketlabel1"><img src={card} className="basketimg2"/>Onlayn ödəniş et</label>
                            <input type="radio" id="car3" name="cars" className="basketradio"/>
                        </div>
                </div>
                <br/><br/><br/><br/>
                <input type="button" value="Sifarişi tamamla"  onClick={click2} className="basketbtn"/>
            </form >

           </div>
          </div>
        </div>
      )
   }
   { click21 && 
        <div className="basketdiv6"> 
          <div  className="container justify-content-center"  id="basketcon3">
           <div className="basketdiv61" >
            <div className="row">
             <div className="col text-end">
               <button className="basketbutton" onClick={mouseClick2}>
                <img src={icon} alt="btn1" className="basketimg"/>
               </button>  
             </div>
            </div>
          <div className="basketdiv62" >
           <div className="basketdiv63" >
            <img src={icon33} alt="img21" className="basketimg3"/>
           </div>
          </div>
          <div className="basketdiv64">
           <p className="basketp2">Sifariş uğurla tamamlandı!</p>
           <p className="basketp3" >Tezliklə sizinlə əlaqə saxlanılacaq.</p>
          </div>
          <button className="basketbtn2" onClick={mouseClick2}>Əvvələ qayıt</button>
         </div>
        </div>
       </div>
    }
    <h5 className="basketh">Səbət</h5>
    <div className="row" id="basketr">
      { click31 &&
       ( <Product onClick={remove}/>)}
    </div>

  <div className=" text-start justify-content-end" id="basketd">
       <Order/>
       <button    type="button" onClick={click}  className="orderbtn" >Sifarişi tamamla</button>
       <div className="basketdiv8">
        <a href="/mehsullar" className="basketa">Qulluq rutininizi tamamla</a> 
       </div>
  </div>

  <div className="row" id="basketr1">
    { click41 && 
     (<Product onClick={remove1} />) }
 </div>
</div> 
</>
	)
}