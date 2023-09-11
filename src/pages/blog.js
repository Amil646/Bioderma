import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/blog.css'
import Article from "../components/article.js"
import sekil3  from'../photos/frame1.png'
import sekil32  from'../photos/frame2.png'
import sekil33  from'../photos/frame3.png'
import sekil34 from'../photos/frame4.png'

function Blog(argument) {
 
     
   return(
<>
  <div  className="container justify-content-center" id="blogcon" >
    <h5 className="blogh"> Let's Change Beauty</h5><br/>
    <p className="blogp">
          Aliqua id fugiat nostrud irure ex duis ea
          quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat 
          incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui 
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut 
          voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt 
          mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor 
          enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex 
          duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor 
          cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
          Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt 
          ut voluptate aute id <br/>
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim 
          tempor enim.  Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat 
          incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
          Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint 
          deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
          uis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
          deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore 
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id </p>
         
  </div>
  < div  className="container justify-content-center" id="blogcon2">
    <h5 className="blogh2"> Oxşar məqalələr</h5>
  </div>  

  <div className="container justify-content-center"  id="blogcon3">
    <div className="row" id="blogrow" >
     <div className="col-3" >
      <Article src={sekil3}  id="1"/> 
     </div>
     <div className="col-3" style={{marginLeft:"-40px"}}>
      <Article src={sekil32}  id="2"/> 
     </div>
     <div className="col-3" style={{marginLeft:"-40px"}} >
      <Article src={sekil33}  id="3"/> 
     </div>
     <div className="col-3"style={{marginLeft:"-45px"}}  >
      <Article src={sekil34} id="4"/> 
     </div>
    </div>
  </div>
  <br/><br/>
  </>
  )
}
export default Blog;