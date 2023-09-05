import React from "react"
import './App'
import img2 from './images/pun.png'
import img31 from './images/dig.png'
import img32 from './images/ui.jpeg'
import { NavLink } from 'react-router-dom';
const Home=()=> {
  const currentYear = new Date().getFullYear();
  const hr={
    width: '540px'
  };
  const sty={
    width:'540px'
  };
return (
 <div>
  <section>
    <nav className="navbar bg-body-tertiary fixed-top">
  <div className="back container-fluid ">
    <a className="modify navbar-brand mb-1 p-4">
    <NavLink to="/Home"><h1 className="hola">Home</h1></NavLink></a>
    <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle mb-3 p-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu">
    <div className="card mb-3" style={hr}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img32} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">UI/UX</h5>
        <p className="card-text"><li>The UI design process may include buttons or widgets, text, images, sliders, and other interactive elements.</li>UX design is the process of creating products or services that provide meaningful experiences for users, involving many different areas of product development including branding, usability, function, and design. </p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={hr}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img31} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Digi Tech</h5>
        <p className="card-text">Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  </ul>
  
</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h2 className="canva offcanvas-title" id="offcanvasNavbarLabel">Jangy</h2>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"></a>
            <NavLink to="/Service">Services</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
            <NavLink to="/Aboutus">About Us</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Us
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"></a></li>
              <NavLink to="/Con">Contact Team</NavLink>
              <li><a className="dropdown-item" href="#"></a></li>
              <NavLink to="/Map">Google Map</NavLink>
              
            </ul>
          </li>
        </ul>
      </div>
    </div>
</div>
</nav>
</section>
<section>
<div>
<img src={img2} alt="helllo"/>
</div>
</section>
<section>
  <footer>
  <div className="deb raw container">
    <h2>Jangy</h2>
        <p>&copy; {currentYear} Jangy. All rights reserved.Jangy is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc.</p>

        <div className="butt">
        <NavLink to="https://www.linkedin.com/in/debajyoti-roy-a1a7bb230/"><button type="button" className="btn btn-outline-primary">LinkedIn</button></NavLink>
        <NavLink to="https://www.google.co.in/search?q=instagram&client=safari&sca_esv=562220161&channel=iphone_bm&sxsrf=AB5stBgKt2zVQWaBEn2kJEWb8LMYHXqUBw%3A1693682133149&source=hp&ei=1YnzZKbzBvnT2roPnJq4gAI&iflsig=AD69kcEAAAAAZPOX5aDdttVWDgsyoGE-UDxEQlpY_lTY&oq=inst&gs_lp=Egdnd3Mtd2l6IgRpbnN0KgIIAjIEECMYJzINEC4YigUYxwEY0QMYJzIHECMYigUYJzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIHEAAYigUYQzIQEAAYgAQYFBiHAhixAxiDATIHEAAYigUYQzILEAAYgAQYsQMYgwFItRVQAFiBBXAAeACQAQCYAdcBoAHpBaoBBTAuMy4xuAEByAEA-AEBwgINEAAYigUYsQMYgwEYQ8ICCxAAGIoFGLEDGIMBwgILEC4YgwEYsQMYigU&sclient=gws-wiz"><button type="button" className="btn btn-outline-danger">Instagram</button></NavLink>
        <NavLink to="https://twitter.com/home"><button type="button" className="btn btn-outline-info">Twitter</button></NavLink>
        <NavLink to="https://discord.com"><button type="button" className="btn btn-outline-secondary">Discord</button></NavLink>
        </div>
      </div>
    </footer>
    </section>
</div>

)
}
export default Home