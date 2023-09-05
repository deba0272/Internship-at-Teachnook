import React from 'react';
import './card.css';
const Car=({ title, imgsrc,content, email, pageLink })=> {
  return (
    <div className="card">
    <div className="card-header">
      <h2>{title}</h2>
    </div>
    <div className="card-body">
    <img src={imgsrc} alt="mypc" className="card__img"/>
      <h3>{content}</h3>
    </div>
    <div className="card-footer">
      <a href={`mailto:${email}`} className="email-link">
        Email
      </a>
      <a href={pageLink} target="_blank" rel="noopener noreferrer" className="page-link">
        Website
      </a>
    </div>
  </div>
  );
}
export default Car;
