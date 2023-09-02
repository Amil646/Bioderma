import Header from '../components/header.js'
import Navbar from '../components/navigationbar.js'
import Body from '../components/navbar.js'
import Hover from '../components/hover.js'
import Footer from '../components/footer.js'






function Layout() {
  return (
    <div style={{textAlign: "Center",minWidth:"1300px"}}>
<Header/>
<Navbar/>
<Hover/>
<br/><br/><br/><br/><br/><br/>

<Body/>
<Footer/>
<br/>

  </div>)
}

export default Layout;
