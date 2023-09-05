import React from "react";
import ReactDOM from "react-dom";
import img9 from './images/p1.jpeg'
import img8 from './images/p2.jpg'
import img7 from './images/p3.jpg'
import img10 from './images/p5.jpg'
import Ard from './Ard.jsx'
import './App.css';
 function Con(){
return(
  <div className="po">
 <div className="turbo">
    <h1>Meet Our Team Members!!</h1>
    </div>
    <div className="bo">
  <Ard imgsrc={img9}
    title="Debajyoti Roy"
    sname="NITA 25'"
    Link="https://www.linkedin.com/in/debajyoti-roy-a1a7bb230/"
/>
    <Ard imgsrc={img8}
    title="Ankita Raj"
    sname="NITA 25'"
    Link="https://www.linkedin.com/in/kushalvijay/"
   />
    <Ard imgsrc={img7}
    title="Angshuman Rakshit"
    sname="NITA 25'"
    Link="https://www.linkedin.com/in/love-babbar-38ab2887/"
   />
     <Ard imgsrc={img10}
    title="Angshuman Rakshit"
    sname="NITA 25'"
    Link="https://www.linkedin.com/in/love-babbar-38ab2887/"
    />
    
    </div>
    </div>
    
)
  }
  export default Con
 
    
   


