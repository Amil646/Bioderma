import '../css/faq.css'
import List from '../components/faq-list.js'

export default function General() {
return(
 <ul className="faqul">
       <List id="f1" number="01" text="How does it work?   " />
       <hr  className="faqhr" />
       <List id="f2" number="02" text="How does it work?   " />
       <hr  className="faqhr" />
       <List id="f3" number="03" text="How does it work?   " />
       <hr  className="faqhr" />
       <List id="f4" number="04" text="How does it work?   " />
</ul>
)
}