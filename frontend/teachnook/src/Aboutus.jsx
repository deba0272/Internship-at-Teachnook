import React from "react";
import { useRef } from 'react';
import './Abo.css'
import emailjs from '@emailjs/browser';
import img60 from'./images/emu.png'
import img61 from'./images/insta.png'
import img62 from'./images/audi.jpeg'
const Aboutus=()=>{
  const hu={
width:'20rem'
  };
  const hr={
    width: '540px'
  };
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_56976ap', 
        'template_e8v0via', form.current, 
        'ZFO0mLauBms_zKBj_')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            alert("Message sent successfully");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <nav className=" noluu navbar navbar-expand-lg bg-body-tertiary p-4">
  <div className="navvv container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Email Marketing
          </a>
          <ul className="dropdown-menu">
          <div className="card mb-3" style={hr}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img60} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services. It can also be a softer sell to educate your audience on the value of your brand or keep them engaged between purchases. It can also be anything in between. Mailchimp can help you design, build, and optimize your email marketing to get the best ROI in your marketing program.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>    
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Social Media Marketing
          </a>
          <ul className="dropdown-menu">
          <div className="card mb-3" style={hr}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img61} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Instagram</h5>
        <p className="card-text">Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media, so if you’re not on platforms like Facebook, Instagram, and LinkedIn, you’re missing out! Great marketing on social media can bring remarkable success to your business, creating devoted brand advocates and even driving leads and sales.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>  
           
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Audience Management
          </a>
          <ul className="dropdown-menu">
          <div className="card mb-3" style={hr}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img62} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Target Audience</h5>
        <p className="card-text">The buying process is in the hands of the customer, and marketers must create targeted, personalized experiences for people if they want to be the one to grab their attention among a sea of brands and advertisers. When marketers have a comprehensive understanding of their ideal buyer, they can make more informed decisions about media, messaging, and timing.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           History
          </a>
          <ul className="dropdown-menu">
          <div class="card" style={hu}>
  <div class="card-body">
    <h5 class="card-title">History</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
    <p class="card-text">
In a world where over 170 million people use social media on a regular basis, every working professional is expected to be familiar with at least the core tenets of Digital Marketing. In simple terms, Digital Marketing is the promotion of products over the internet or any form of electronic media. According to the Digital Marketing Institute, "Digital Marketing is the use of digital channels to promote or market products and services to targeted consumers and businesses."</p>
    <a href="https://www.wikipedia.org" class="card-link">Wikipedia.com</a>

  </div>
</div>
            
          </ul>
        </li>
     
      </ul>
    
    </div>
  </div>
</nav>
        <div className="super">       
        <form ref={form} onSubmit={sendEmail}>
            <div className="me">
          <label>Name</label>
          </div>
          <div className="na">
          <input type="text" name="user_name" />
          </div>
          <div className="em">
          <label>Email</label>
          </div>
          <div className="ee">
          <input type="email" name="user_email" />
</div>
          <div className="mess">
          <label>Message</label>
         </div>
         <div className="mes">
          <textarea name="message" />
</div>
          <div className="sen">
          <input type="submit" value="Send" />
          
          </div>
        </form>
       </div>
       </div>
       
      );
    };
export default Aboutus;

