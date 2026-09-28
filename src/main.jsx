import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const images={
  hero:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88',
  living:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88',
  city:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=88',
  team:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88'
};

function CallModal({onClose}){const [done,setDone]=useState(false);return <div className="modal-layer" onClick={onClose}><div className="modal" onClick={e=>e.stopPropagation()}>{!done?<><button className="x" onClick={onClose}>×</button><span className="kicker">FLEX ACADEMY / STRATEGY CALL</span><h3>Let’s look at the business behind your portfolio.</h3><p>Tell us where you are today. The call is a 20–30 minute conversation about your operation, bottlenecks and next stage.</p><div className="fields"><input placeholder="Name"/><input placeholder="Work email"/><select defaultValue=""><option value="" disabled>Current units</option><option>1–4</option><option>5–10</option><option>11–20</option><option>21–30</option><option>30+</option></select><input placeholder="Primary market / city"/><button className="pill dark full" onClick={()=>setDone(true)}>Continue to booking ↗</button></div></>:<><span className="kicker">NEXT STEP</span><h3>You’re ready for the calendar.</h3><p>Your details are captured. Connect this step to the live booking calendar when the production flow is ready.</p><button className="pill dark" onClick={onClose}>Close</button></>}</div></div>}

function App(){
 const [call,setCall]=useState(false); const [faq,setFaq]=useState(null);
 const faqs=[
  ['Is Flex Academy a course?','It is designed around implementation, operating decisions and systems rather than a passive library of lessons.'],
  ['Who is it for?','The primary audience is an STR operator already managing roughly 5–30 units and ready to build a business that can scale beyond the founder.'],
  ['How does Base360 fit in?','Base360 is the operating technology behind the wider ecosystem. Academy teaches the operating thinking and systems; Base360 is the platform that can support those systems.'],
  ['What happens on the strategy call?','You discuss your current portfolio, constraints, goals and whether the programme is a fit.']
 ];
 return <div className="site">
  <div className="announcement"><span>FLEX ACADEMY</span><span>THE OPERATOR PROGRAMME FROM THE PEOPLE BEHIND THE FLEX + BASE360</span><button onClick={()=>setCall(true)}>BOOK A STRATEGY CALL ↗</button></div>
  <header className="nav"><a className="brand" href="#"><strong>FLEX</strong><span>ACADEMY</span></a><nav><a href="#why">Why Flex</a><a href="#system">The system</a><a href="#programme">Programme</a><a href="#founders">Founders</a></nav><button className="pill dark" onClick={()=>setCall(true)}>Book a call ↗</button></header>

  <main>
   <section className="hero">
    <img className="hero-image" src={images.hero}/>
    <div className="hero-overlay"></div>
    <div className="hero-content"><span className="kicker light-text">FOR STR OPERATORS / 5–30 UNITS</span><h1>Build the business<br/><i>behind the properties.</i></h1><p>Flex Academy transfers the operating thinking, systems and commercial discipline behind The Flex — with Base360 as the technology layer.</p><div className="hero-actions"><button className="pill white" onClick={()=>setCall(true)}>Book a free strategy call ↗</button><a className="text-link" href="#programme">Explore the programme ↓</a></div></div>
    <div className="hero-panel"><div className="panel-head"><span>BASE360 / PORTFOLIO</span><b>OPERATING</b></div><div className="panel-main"><strong>18</strong><span>properties</span></div><div className="panel-grid"><div><b>03</b><span>Exceptions</span></div><div><b>42</b><span>Team tasks</span></div><div><b>91%</b><span>Occupancy</span></div></div><div className="mini-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
   </section>

   <section className="ticker"><span>THE FLEX / REAL-WORLD OPERATION</span><span>BASE360 / OPERATING TECHNOLOGY</span><span>FLEX ACADEMY / OPERATOR PLAYBOOK</span><span>BUILT FROM EXPERIENCE</span></section>

   <section id="why" className="intro section"><div className="intro-copy"><span className="kicker">THE GAP</span><h2>Going from 5 to 30 units isn't just <i>more properties.</i></h2></div><div className="intro-side"><p>The work changes. More bookings become more exceptions. More guests become more messages. More properties become more people, processes and decisions.</p><p>Flex Academy is built around that transition — from being the person who runs everything to building the company that can run without everything passing through you.</p></div></section>

   <section className="shift section"><div className="section-label"><span className="kicker">THE SHIFT</span><span>WHAT CHANGES AS YOU SCALE</span></div><div className="shift-grid">{[['01','PROPERTY','→','PORTFOLIO','Think in systems, not individual listings.'],['02','TASKS','→','WORKFLOWS','Turn recurring work into repeatable operating processes.'],['03','FOUNDER','→','TEAM','Build ownership, standards and decision paths.'],['04','TOOLS','→','OPERATING SYSTEM','Connect the information your team needs to act.']].map(x=><article key={x[0]}><span className="num">{x[0]}</span><div className="shift-title"><b>{x[1]}</b><em>{x[2]}</em><strong>{x[3]}</strong></div><p>{x[4]}</p></article>)}</div></section>

   <section id="system" className="system section"><div className="system-head"><span className="kicker">ONE ECOSYSTEM</span><h2>Experience → system → <i>operator.</i></h2><p>The Academy is not a disconnected education brand. It sits inside the same ecosystem that runs a real STR business.</p></div><div className="ecosystem"><article className="eco flex"><div className="eco-tag">01 / THE FLEX</div><h3>The operation.</h3><p>Real-world short-term rental experience: property management, guest experience, pricing, teams and growth.</p><a href="https://theflex.global/" target="_blank" rel="noreferrer">theflex.global ↗</a></article><div className="connector">↓</div><article className="eco base"><div className="eco-tag">02 / BASE360</div><h3>The operating system.</h3><p>One platform for channels, properties, inbox, cleaning, pricing, finance, team and AI workflows.</p><a href="https://base360.ai/" target="_blank" rel="noreferrer">base360.ai ↗</a></article><div className="connector">↓</div><article className="eco academy"><div className="eco-tag">03 / FLEX ACADEMY</div><h3>The playbook.</h3><p>The thinking, frameworks and operating discipline that help an operator build the next layer of the business.</p><span>YOU ARE HERE</span></article></div></section>

   <section className="product section"><div className="product-image"><img src={images.living}/><div className="product-caption">REAL PROPERTY / REAL OPERATIONS</div></div><div className="product-copy"><span className="kicker">THE TECHNOLOGY LAYER</span><h2>Don't just add software.<br/><i>Build the system around it.</i></h2><p>Base360 was built from The Flex's own operating needs. Its platform brings bookings, guest communication, properties, cleaning, pricing, finance and team workflows into one operating environment.</p><div className="feature-list"><div><b>01</b><span>Channel management + calendar</span></div><div><b>02</b><span>Properties + operating knowledge</span></div><div><b>03</b><span>Unified inbox + guest workflows</span></div><div><b>04</b><span>Cleaning, maintenance + team</span></div><div><b>05</b><span>Pricing + AI layer</span></div></div></div></section>

   <section id="programme" className="programme section"><div className="programme-top"><span className="kicker">FLEX ACADEMY / 12 WEEKS</span><h2>A practical operating<br/><i>reset.</i></h2><p>Five layers. One operating model. Built to be implemented while you are still running the business.</p></div><div className="programme-grid">{[['01','SEE','Diagnose the portfolio','Find the real bottlenecks before adding more complexity.'],['02','SYSTEMISE','Document the operation','Turn recurring decisions into clear processes and standards.'],['03','CONNECT','Build the information flow','Give people, properties and tools one source of truth.'],['04','LEAD','Build the team layer','Move ownership and decisions closer to the work.'],['05','SCALE','Design the next stage','Create the operating rhythm for the portfolio you want to become.']].map(x=><article key={x[0]}><span>{x[0]}</span><b>{x[1]}</b><h3>{x[2]}</h3><p>{x[3]}</p></article>)}</div></section>

   <section className="editorial section"><div className="editorial-copy"><span className="kicker">OPERATOR MINDSET</span><h2>What got you to 5 units won't necessarily get you to 30.</h2><p>Flex Academy is about changing the way the business is operated — not giving you another checklist to keep beside the laptop.</p><button className="pill dark" onClick={()=>setCall(true)}>Talk through your operation ↗</button></div><div className="editorial-image"><img src={images.city}/><div className="image-note">PEOPLE / PROCESS / PROPERTY / PLATFORM</div></div></section>

   <section id="founders" className="founders section"><div className="founder-photo"><img src={images.team}/><div className="founder-label"><span>THE PEOPLE BEHIND IT</span><strong>Raouf Yousfi + Michael Buggy</strong></div></div><div className="founder-copy"><span className="kicker">FOUNDER-LED</span><h2>Built because the problems were <i>real.</i></h2><p>Base360 describes the origin clearly: the technology grew out of the team's daily work running The Flex. Flex Academy extends that same practical context into an operator programme.</p><div className="quote">“We built the systems because we needed them.”<small>THE FLEX / BASE360 STORY</small></div></div></section>

   <section className="qualification"><div className="qual-dark"><span className="kicker light-text">THIS IS FOR YOU</span><h2>You already operate.<br/><i>Now build the company.</i></h2><ul><li>5–30 units or a similar operating stage</li><li>Ready to implement, not just consume</li><li>Want systems that survive growth</li><li>Willing to challenge how the business runs</li></ul></div><div className="qual-image"><img src={images.hero}/><div><span>NOT A PASSIVE COURSE</span><strong>Implementation is the point.</strong></div></div></section>

   <section id="faq" className="faq section"><div><span className="kicker">QUESTIONS</span><h2>Before you<br/><i>book.</i></h2></div><div className="faq-list">{faqs.map((f,i)=><div className="faq-row" key={f[0]}><button onClick={()=>setFaq(faq===i?null:i)}><span>{f[0]}</span><b>{faq===i?'−':'+'}</b></button>{faq===i&&<p>{f[1]}</p>}</div>)}</div></section>

   <section className="cta"><div className="cta-inner"><span className="kicker light-text">FLEX ACADEMY</span><h2>Build the business<br/><i>behind the properties.</i></h2><p>Bring your portfolio, your bottlenecks and your ambition. Start with a 20–30 minute conversation.</p><button className="pill white" onClick={()=>setCall(true)}>Book a free strategy call ↗</button><small>No obligation · qualification conversation</small></div></section>
  </main>
  <footer><div className="brand"><strong>FLEX</strong><span>ACADEMY</span></div><div><span>The operator programme from the people behind The Flex + Base360.</span><span>© 2026 Flex Academy</span></div></footer>
  {call&&<CallModal onClose={()=>setCall(false)}/>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);