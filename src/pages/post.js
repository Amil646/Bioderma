import '../css/post.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from '../components/pagination.js'
import Article from "../components/article.js"
import sekil3  from'../photos/frame1.png'
import sekil32  from'../photos/frame2.png'
import sekil33  from'../photos/frame3.png'
import sekil34 from'../photos/frame4.png'
import sekil35  from'../photos/frame5.png'
import sekil36  from'../photos/frame6.png'
import sekil37  from'../photos/frame7.png'
import sekil38 from'../photos/frame8.png'

export default function Post(argument) {
    
   return(
   	<>
     <div  className="container justify-content-center" id="postcon1">
        <h5 className="posth">  Məqalələr</h5>
     </div>  

  <div className="container justify-content-center"  id="postcon2">
   <div className="row" id="postrow1">
    <div className="col-3" >
      <Article src={sekil35}  id="5"/> 
    </div>
    <div className="col-3" id="postcol1" >
      <Article src={sekil36}  id="6"/> 
    </div>
    <div className="col-3"  id="postcol2">
      <Article src={sekil37}  id="7"/> 
    </div>
    <div className="col-3" id="postcol3" >
      <Article src={sekil38} id="8"/> 
    </div>
   </div>

   <div className="row" id="postrow2"  >

    <div className="col-3" >
     <Article src={sekil3}  id="1"/> 
    </div>
    <div className="col-3" id="postcol4">
      <Article src={sekil32}  id="2"/> 
    </div>
    <div className="col-3"  id="postcol5">
      <Article src={sekil33}  id="3"/> 
    </div>
    <div className="col-3" id="postcol6">
      <Article src={sekil34} id="4"/> 
    </div>  
   </div>
   <div className="row justify-content-center" id="postdiv">
    <Pagination/>
   </div>
  </div>
   <br/><br/>
</>
   	)
}
