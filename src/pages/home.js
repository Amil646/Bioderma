import sekil3  from'../photos/Frame 1601.png'
import icon1 from '../photos/Icon5.png'
import sekil31 from'../photos/Frame 1601 (1).png'
import sekil32 from'../photos/Frame 1601 (2).png'
import sekil33  from'../photos/Frame 1601 (3).png'
import sekil4  from'../photos/Frame 47652.png'
import sekil5 from  '../photos/image20.png'
import sekil6 from  '../photos/image31.png'
import sekil7 from  '../photos/image32.png'
import sekil8 from  '../photos/image33.png'
import sekil9 from  '../photos/image40.png'
import Carousell from '../components/carousel.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import '../css/home.css'
import Ex from '../components/carousel2.js'
import Discount from '../components/discount.js'
import More from '../components/more.js'
import Harvests from '../components/harvests.js'
import Harvests2 from '../components/harvests2.js'
import Routines from '../components/routine.js'

function Index() {
 
  return (
<>
<div className="container justify-content-center" id="homecon" >
  <div className="row " id="homerow">
   <div className="col-8">
    <Ex/>
   </div>
   <div className="col-4" id="homecol">
      <a href="/aksiya"  style={{textDecoration:"none"}}>
       <Discount/>
      </a>
   </div>
  </div>
</div>
  <div  className="container justify-content-center"  id="homecon1" >
   <div className="row" id="homerow2">
    <div className="col">
      <h4 className="homeh" >Endirimli məhsullar</h4>
      <div id="box" className="homediv" ></div>
    </div>
    <div className="col text-center" id="homecol2" >
    <a href="/aksiya" style={{ textDecoration:"none",}}>
     <p  className="text-end" className="homep" >Hamısına bax</p></a>
    </div>
   </div>
  </div>
  <br/>
  <div className="container justify-content-center"  id="homec">
    <Harvests/>
  </div> 
  <br/>
  <br/>
  <div className="container justify-content-center" id="homec2">
    <Harvests2/>
  </div>
  <>
    <More />
  </>
  <div  className="container justify-content-center"    id="homecon2">
   <div className="row" id="homerow3">
   <br/>
    <div className="col">
     <h4 className="homeh2" >Dəri qulluğu rutini</h4>
     <div id="box" className="homediv2"></div>
    </div>
   </div>
  </div>

  <div className="container justify-content-center" id="homecon3">
   <div className="row" id="homerow4">
    <div className="col-4"  >
     <Routines src={sekil6} text="1.Addım: Təmizlə" />
    </div>
    <div className="col-4"  style={{marginLeft:"-50px"}}>
     <Routines src={sekil7} text="2. Addım: Müalicə et və qulluq (nəmləndir) et" />
    </div>
    <div className="col-4"  style={{marginLeft:"-50px"}}>
    <Routines src={sekil8} text="3. Addım: Günəşdən qoru" />
    </div>
   </div>
  </div>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div className="container justify-content-center" id="homecon4">
   <div style={{marginLeft:"13px"}}>
    <Carousell/>
   </div>
  </div>
</>
  )
}
export default Index;
