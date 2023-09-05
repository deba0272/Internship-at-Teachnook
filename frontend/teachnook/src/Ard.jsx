import React from "react";
import './App.css';
 function Ard(props){
  return(
    <>
     
    <div className="sum cards">
      <div className="card">
        <img src={props.imgsrc} alt="mypc" className="card__img"/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.Link} target="_blank">
            <button>Linked In</button>
          </a>
        </div>
      </div>
    </div>
    </>
    )
    }
    export default Ard;