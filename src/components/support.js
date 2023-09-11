import '../css/faq.css'
import List from '../components/faq-list.js'
export default function Support(style) {
return(
<>
 <ul className="faqul">
       <List id="f5" number="01" text="How can i set up a new website?" />
       <hr  className="faqhr" />
       <List id="f6" number="02" text="How can i set up a new website? " />
       <hr  className="faqhr" />
       <List id="f7" number="03" text="How can i set up a new website? " />
       <hr  className="faqhr" />
       <List id="f8" number="04" text="How can i set up a new website?  " />
 </ul>
</>
	)
}