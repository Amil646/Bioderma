import List from '../components/faq-list.js'
import '../css/faq.css'

export default function Support(style) {
return(   
	<>
	  <ul className="faqul">
     <List id="f11" number="01" text="How can i set up a new website?" />
       <hr  className="faqhr" />
       <List id="f9" number="02" text="How can i set up a new website? " />
       <hr  className="faqhr" />
       <List id="f10" number="03" text="How can i set up a new website? " />
     </ul>
	</>
	)
}