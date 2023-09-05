// Card.js
import React from 'react';
import './card.css';
import Car from './car.jsx'
import img50 from './images/air.png'
import img51 from './images/america.png'
import img52 from './images/slack.png'
import img53 from './images/uber.jpeg'
import img54 from './images/boat.png'
import img55 from './images/tata.png'
import img56 from './images/starbuck.png'
import img57 from './images/nestle.png'
const Portfolio = ({ title, content, email, pageLink }) => {
  return (
    <div className="Apps">
    <nav className="navbar sticky-top bg-body-tertiary mb-6 p-1">
  <div className="mp container-fluid">
    <a className="yu navbar-brand"><h1>Summer Campaigns</h1></a>
  </div>
</nav>
      <div className="card-container">
        <Car
          title="Air-bnb"
          imgsrc={img50}
          content="Made Possible by Hosts"
          email="bnb4555@email.com"
          pageLink="https://www.airbnb.co.in"
        />
        <Car
          title="American Express"
          imgsrc={img51}
          content="Bussiness Cards"
          email="america2455email.com"
          pageLink="https://www.americanexpress.com/en-in/"
        />
         <Car
          title="Slack"
          imgsrc={img52}
          content="Built for productivity"
          email="slack78@email.com"
          pageLink="https://slack.com/intl/en-in"
        />
         <Car
          title="Uber"
          imgsrc={img53}
          content="Better Connectivity"
          email="uber45@email.com"
          pageLink="https://m.uber.com/looking?effect=&redirect=false"
        />
         <Car
          title="Boat"
          imgsrc={img54}
          content="Fashionable audio products"
          email="boat989@email.com"
          pageLink="https://www.boat-lifestyle.com/collections/?utm_source=Google&utm_medium=Search&utm_campaign=SB_Search_Brand_India_Sep2020&gclid=CjwKCAjw3dCnBhBCEiwAVvLcu6HL0Np7h1cWDNh-B4Wqkxg8m6ovAPHTJwQrtkXGvc1p4YKnpnV43xoClwQQAvD_BwE"
        />
         <Car
          title="TATA"
          imgsrc={img55}
          content="Leading Through Legacy "
          email="tatrec34555@email.com"
          pageLink="https://www.tata.com"
        />
         <Car
          title="Starbucks"
          imgsrc={img56}
          content="Iced Latte"
          email="tatastar457@email.com"
          pageLink="https://www.starbucks.in/dashboard"
        />
        <Car
          title="Nestle"
          imgsrc={img57}
          content="Good food,Good life"
          email="nesindia67@email.com"
          pageLink="https://www.nestle.in"
        />
        
      </div>
    </div>
  );
};

export default Portfolio;
