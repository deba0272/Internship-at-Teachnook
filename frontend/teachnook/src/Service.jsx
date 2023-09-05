import React from "react";
import img11 from './images/seo.png';
import img12 from './images/em.jpeg';
import img13 from './images/web.png';
import img14 from './images/pay.png';
import './Service.css'
import img29 from './images/wekk.jpeg'
function Service() { 
    const cardStyle = {
    width: '18rem'
}; 
    return (
        <div>
            <nav className="judge navbar bg-body-tertiary mb-1">
  <div className="num container-fluid">
    <span className=" kol navbar-text">
     <h1>Services by Jangy!!</h1>
    </span>
  </div>
</nav>
          <div className="backu">
            </div>
           <div className="watt card" style={cardStyle}>
            <div className="seo">
            <h3>Search engine optimization (SEO)</h3>
            </div>
  <img src={img11} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">SEO</h5>
    <p className="card-text"><li>Increase rankings, traffic, and conversions for existing URLs</li>
    <li> Stronger backlink profile
Improve website usability via a faster page speed and lower load times</li>
<li> Process of making your site better for different search engines(Chrome,Safari)</li></p>
  </div>

  <div className="card-body">
    <a href="https://www.hostinger.in/tutorials/seo-friendly-website?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9150827&gclid=Cj0KCQjwusunBhCYARIsAFBsUP-51051dfTHBacUcgRL9peMcF3zK5RdYz5IBlFTnwc19KWXpIGt48AaAk3nEALw_wcB" className="card-link">SEO</a>
  </div>
</div>
<div className="card" style={cardStyle}>
            <div className="seo">
            <h3>Web Designing
            </h3>
            </div>
  <img src={img13} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Web</h5>
    <p className="card-text"><li>Whenever you plan to design a website and brand image, always keep users in mind</li>
<li> Navigation and user effective website to a great extent making it responsive</li>  
<li>Web Friendly</li>
</p>
  </div>
  <div className="card-body">
    <a href="https://www.hostinger.in/ai-website-builder?ppc_campaign=google_search_generic_hosting_all&bidkw=website%20builder&lo=9150827&gclid=Cj0KCQjwusunBhCYARIsAFBsUP9yX9us-Syy9uzQKrPM2QPI2yXIdP_YcLwFLow3a92ih0OUuNU_DeUaApiSEALw_wcB" className="card-link">Web</a>
  </div>
</div>

<div className="card" style={cardStyle}>
<div className="ppc">
            <h3>Pay-per-click advertising(PPC)</h3>
            </div>
  <img src={img14} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">PPC</h5>
    <p className="card-text"><li>Setting up ad campaigns</li>
<li>Designing ad graphics</li>
<li>Building ad landing pages</li>
<li>Creating audio or video ads</li>
</p>
  </div>
 
  <div className="card-body">
    <a href="https://www.wordstream.com/ppc#:~:text=PPC%20stands%20for%20pay%2Dper,of%20their%20ads%20is%20clicked." className="card-link">PPC</a>
  </div>
</div>
<div className="card" style={cardStyle}>
<div className="market">
            <h3>Content and Email Marketings</h3>
            </div>
  <img src={img12} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">CEM</h5>
    <p className="card-text"><li>Brand awareness</li>
    <li>Ensures  to get the right information at the right time</li>
    <li>Cost-per-click(CPC)</li>
   
    </p>
  </div>

  <div className="card-body">
    <a href="https://www.bluehost.com/blog/get-started-content-marketing/?utm_campaign=pmax_PPC&utm_source=googleads&utm_medium=genericsearch&utm_affiliate=bluehost_PPC&irpid=101&clickid=P61C101S570N0B5578A2D4499E0000V292&pb=signup_searchgenericpromo&siteid=101&channelid=P61C101S570N0B5578A2D4499E0000V292&gclid=Cj0KCQjwusunBhCYARIsAFBsUP-kkASt7Ek5S-DBqlwq7K0k3N9GIbyczuYSiM4pQtE8mDANB27G-7gaAv_8EALw_wcB&gclsrc=aw.ds" className="card-link">CEM</a>
    
  </div>
</div>
</div>
    );
}
export default Service;
