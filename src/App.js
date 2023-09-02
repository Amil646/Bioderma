import './css/App.css';
import Header from './components/header.js'
import Navbar from './components/navigationbar.js'
import Body from './components/navbar.js'
import Hover from './components/hover.js'
import Footer from './components/footer.js'
import Buttons from  './components/buttons.js'


import Layout from './pages/layout.js'


import Index from './pages/home.js'
import Aksiya from './pages/aksiya.js'
import Aksiyalar from './pages/aksiyalar.js'
import Likes from './pages/beyenilenler.js'
import Notf from './pages/notfound.js'
import Result from  './pages/netice.js'
import Blog from  './pages/blog.js'
import Post from  './pages/post.js'
import Brand from  './pages/brands.js'
import Certificates from  './pages/certificates.js'
import About from  './pages/about.js'
import Filter from  './pages/filter.js'
import Basket from  './pages/sebet.js'
import Doctors from  './pages/doctors.js'
import Empty from  './pages/empty.js'
import Faq from  './pages/faq.js'
import Store from  './pages/stores.js'
import Conditions from  './pages/guarantee.js'
import Mehsul from  './pages/mehsul.js'




import {Routes,Route,Link,NavLink} from 'react-router-dom'



function App() {
  return (
    <div style={{textAlign: "Center",minWidth:"1300px"}}>
<Header/>
<Navbar/>
<Hover/>
<Buttons/>
<Routes>
<Route path="/" element={<Index />} />
<Route path="/sebet" element={<Basket />} />
<Route path="/mehsullar" element={<Filter />} />
<Route path="/haqqimizda" element={<About />} />
<Route path="/sertifikat" element={<Certificates />} />
<Route path="/faydali" element={<Post />} />
<Route path="/blog" element={<Blog />} />
<Route path="/filter-tapilmadi" element={<Notf />} />
<Route path="/beyenilenler" element={<Likes />} />
<Route path="/aksiyalar" element={<Aksiyalar />} />
<Route path="/aksiya" element={<Aksiya />} />
<Route path="/brendler" element={<Brand />} />
<Route path="/axtaris" element={<Result />} />
<Route path="/hekim-cixislari" element={<Doctors />} />
<Route path="/sebet-bosdur" element={<Empty />} />
<Route path="/faq" element={<Faq />} />
<Route path="/zemanet-sertleri" element={<Conditions />} />
<Route path="/magazalar" element={<Store />} />
<Route path="/mehsul" element={<Mehsul />} />

</Routes>



<br/><br/><br/>
<Body/>
<Footer/>

  </div>)
}

export default App;
