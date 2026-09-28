import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const img={
 hero:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88',
 property:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=88',
 team:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88'
};

function Dashboard({type='overview'}){return <div className="dash"><div className="dashbar"><b>BASE360</b><span>{type}</span><i></i></div><div className="dashbody"><aside><b>Overview</b><span>Calendar</span><span>Properties</span><span>Inbox</span><span>Cleaning</span><span>Pricing</span></aside><div className="dashmain"><div className="dashrow"><div><small>PORTFOLIO</small><strong>18</strong><em>properties</em></div><div><small>OCCUPANCY</small><strong>91%</strong><em>last 30 days</em></div><div><small>OPEN TASKS</small><strong>07</strong><em>3 urgent</em></div></div><div className="dashchart"><div className="bars">{[38,54,43,70,59,82,66,91,74].map((h,i)=><i key={i} style={{height:h+'%'}} />)}</div></div><div className="dashlist">{[1,2,3].map(i=><span key={i}><b>{i===1?'London · 2BR':i===2?'Paris · 1BR':'Algiers · 3BR'}</b><em>{i===1?'Ready':i===2?'Occupied':'Cleaning'}</em></span>)}</div></div></div></div>}

function Modal({close}){const [done,setDone]=useState(false);return <div className="modalbg" onClick={close}><div className="modal" onClick={e=>e.stopPropagation()}><button onClick={close}>×</button>{!done?<><span className="mono">FLEX ACADEMY / STRATEGY CALL</span><h3>Let's talk about the next stage of your operation.</h3><p>20–30 minutes. Bring your current unit count, biggest bottleneck and where you want the business to go.</p><div className="form"><input placeholder="Name"/><input placeholder="Work email"/><select defaultValue=""><option value="" disabled>Current units</option><option>1–4</option><option>5–10</option><option>11–20</option><option>21–30</option><option>30+</option></select><input placeholder="Primary market"/><button className="darkbtn" onClick={()=>setDone(true)}>Continue to booking ↗</button></div></>:<><span className="mono">NEXT STEP</span><h3>Your strategy call is ready to book.</h3><p>Connect this confirmation step to the live calendar when the production booking flow is available.</p><button className="darkbtn" onClick={close}>Close</button></>}</div></div>}

function App(){
 const [modal,setModal]=useState(false);
 useEffect(()=>{const els=document.querySelectorAll('.reveal');const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in') }),{threshold:.12});els.forEach(e=>ob.observe(e));return()=>ob.disconnect()},[]);
 const sections=[
  ['01','SOURCE THE RIGHT PROPERTIES','Find the deals that fit your model. Build a portfolio with intention, not just more doors.','property'],
  ['02','LAUNCH THE OPERATION','Turn every new property into a repeatable launch — setup, standards, access, guest journey and team ownership.','launch'],
  ['03','OPERATE THE STAY','Build the workflows behind the guest experience: inbox, cleaning, maintenance, handoffs and exceptions.','operate'],
  ['04','OPTIMISE THE PORTFOLIO','Use pricing, performance and operating data to make better decisions across the portfolio.','optimise'],
  ['05','RUN THE COMPANY','Move from founder-dependent operations to people, processes and technology that can carry the load.','company'],
  ['06','THE AI LAYER','Understand where automation belongs, where humans decide and how technology can extend the team.','ai']
 ];
 return <div>
 <div className="topline"><span>FLEX ACADEMY</span><span>THE OPERATOR PROGRAMME FROM THE PEOPLE BEHIND THE FLEX + BASE360</span><button onClick={()=>setModal(true)}>BOOK A STRATEGY CALL ↗</button></div>
 <header><a className="logo" href="#"><b>THE FLEX</b><span>ACADEMY</span></a><nav><a href="#journey">Journey</a><a href="#ecosystem">Ecosystem</a><a href="#programme">Programme</a><a href="#founders">Founders</a></nav><button className="outline" onClick={()=>setModal(true)}>Book a call ↗</button></header>
 <main>
  <section className="hero">
   <div className="hero-bg"></div><img src={img.hero} className="hero-img"/>
   <div className="hero-copy"><span className="mono white">FOR STR OPERATORS / 5–30 UNITS</span><h1>Run your<br/><i>STR business</i><br/>like a company.</h1><p>The Flex Academy transfers the operating playbook behind a real multi-city STR business — from sourcing and systems to teams, technology and scale.</p><div><button className="whitebtn" onClick={()=>setModal(true)}>Book a free strategy call ↗</button><a href="#journey">Explore the operating journey ↓</a></div></div>
   <div className="hero-dash"><Dashboard type="LIVE PORTFOLIO"/></div>
  </section>

  <section className="intro reveal"><div><span className="mono">THE GAP</span><h2>More units don't create a company.<br/><i>Systems do.</i></h2></div><p>Base360 was built from The Flex's own operating needs. Flex Academy brings that same practical thinking into an operator programme — so you can build the systems behind the portfolio, not just manage another property.</p></section>

  <section id="journey" className="journey">
   <div className="journey-head reveal"><span className="mono">THE FLEX ACADEMY OPERATING JOURNEY</span><h2>From property<br/><i>to company.</i></h2><p>One continuous operating model. Scroll to move through the business.</p></div>
   <div className="path-wrap">
    <svg className="path" viewBox="0 0 1000 3600" preserveAspectRatio="none"><defs><linearGradient id="flexLine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1d63d8"/><stop offset="55%" stopColor="#2475d8"/><stop offset="100%" stopColor="#111"/></linearGradient></defs><path d="M500 0 C500 180 260 210 260 390 S740 610 740 810 S260 1030 260 1230 S740 1450 740 1650 S260 1870 260 2070 S740 2290 740 2490 S260 2710 260 2910 S500 3220 500 3600" fill="none" stroke="#c9d4e3" strokeWidth="5"/><path className="path-active" d="M500 0 C500 180 260 210 260 390 S740 610 740 810 S260 1030 260 1230 S740 1450 740 1650 S260 1870 260 2070 S740 2290 740 2490 S260 2710 260 2910 S500 3220 500 3600" fill="none" stroke="url(#flexLine)" strokeWidth="5" strokeLinecap="round"/></svg>
    {sections.map((s,i)=><article className={'journey-card reveal c'+i} key={s[0]}><div className="stage"><span>{s[0]}</span><small>FLEX ACADEMY</small></div><div className="stage-copy"><span className="mono">{s[1]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div><div className="stage-visual">{i===0?<img src={img.property}/>:i===1?<Dashboard type="LAUNCH / SETUP"/>:i===2?<Dashboard type="OPERATIONS"/>:i===3?<Dashboard type="PRICING / PERFORMANCE"/>:i===4?<Dashboard type="COMPANY"/>:<div className="ai-card"><span className="mono">AI LAYER / BASE360</span><strong>Turn procedures<br/>into actions.</strong><div><b>Bookings</b><b>Guest inbox</b><b>Tasks</b><b>Pricing</b></div></div>}</div></article>)}
   </div>
  </section>

  <section id="ecosystem" className="ecosystem reveal"><div className="eco-copy"><span className="mono">ONE ECOSYSTEM</span><h2>The operation.<br/>The system.<br/><i>The academy.</i></h2><p>The Flex operates the real-world business. Base360 connects the work. Flex Academy teaches the operator thinking that ties it together.</p></div><div className="eco-stack"><div className="eco-card flex"><span>01 / THE FLEX</span><strong>REAL-WORLD OPERATION</strong><p>Hospitality, property, people and guest experience.</p></div><div className="eco-card base"><span>02 / BASE360</span><strong>OPERATING TECHNOLOGY</strong><p>One platform for channels, properties, inbox, cleaning, pricing, finance and AI.</p></div><div className="eco-card academy"><span>03 / FLEX ACADEMY</span><strong>OPERATOR PLAYBOOK</strong><p>The systems, decisions and habits behind scalable operations.</p></div></div></section>

  <section id="programme" className="programme reveal"><div><span className="mono">12 WEEKS / IMPLEMENTATION FIRST</span><h2>Don't learn more.<br/><i>Operate better.</i></h2><p>Weekly group sessions, founder access, templates and operating systems designed to be used while you are running the business.</p><button className="darkbtn" onClick={()=>setModal(true)}>Book a strategy call ↗</button></div><div className="programme-list">{[['01','Diagnose','See the real bottleneck.'],['02','Systemise','Make recurring work repeatable.'],['03','Connect','Create one operating view.'],['04','Lead','Build ownership beyond the founder.'],['05','Scale','Design the next operating layer.']].map(x=><div key={x[0]}><b>{x[0]}</b><strong>{x[1]}</strong><span>{x[2]}</span></div>)}</div></section>

  <section id="founders" className="founders reveal"><div className="founder-image"><img src={img.team}/><div><span className="mono">THE PEOPLE BEHIND THE SYSTEM</span><strong>Raouf Yousfi + Michael Buggy</strong></div></div><div className="founder-copy"><span className="mono">BUILT FROM EXPERIENCE</span><h2>“We built it because <i>we needed it.</i>”</h2><p>Base360 says its roots are in the daily work of The Flex. The Academy extends that operating context into a programme for operators who are ready to build beyond themselves.</p><a href="https://base360.ai/" target="_blank" rel="noreferrer">Explore the operating story ↗</a></div></section>

  <section className="final reveal"><span className="mono">FLEX ACADEMY</span><h2>Build the company<br/><i>behind the properties.</i></h2><p>Bring your portfolio, bottlenecks and growth plans. Start with a focused 20–30 minute conversation.</p><button className="whitebtn" onClick={()=>setModal(true)}>Book a free strategy call ↗</button></section>

  <section className="faq reveal"><div><span className="mono">YOUR QUESTIONS</span><h2>Answered.</h2></div><div>{['Who is Flex Academy for?','Is this a course?','How does Base360 fit?','What happens on the strategy call?'].map((q,i)=><details key={q}><summary>{q}<b>+</b></summary><p>{['Primarily STR operators already managing properties, typically around the 5–30 unit stage, who want to build a scalable operating company.','It is implementation-led: operating decisions, systems, frameworks, feedback and founder context rather than passive video consumption.','Base360 is the technology layer in the wider ecosystem. Academy teaches the operating thinking that makes systems and technology useful.','A 20–30 minute qualification conversation about your current portfolio, bottlenecks, goals and fit.'][i]}</p></details>)}</div></section>
 </main>
 <footer><div className="logo"><b>THE FLEX</b><span>ACADEMY</span></div><p>Operator education built from the real work behind The Flex + Base360.</p><span>© 2026 Flex Academy</span></footer>
 {modal&&<Modal close={()=>setModal(false)}/>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);