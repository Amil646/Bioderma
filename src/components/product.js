import '../css/faq.css'
import List from '../components/faq-list.js'

export default function Support(style) {  
return(   
<>
 <ul className="faqul">
   <List id="f12" number="01" text="How can i set up a new website?" />
       <hr  className="faqhr" />
       <List id="f13" number="02" text="How can i set up a new website? " />
 </ul>
</>
	)
}