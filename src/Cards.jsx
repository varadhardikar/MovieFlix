import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Card(props) {
    return(
        <Link to={`/info/${props.id}`} className="cardWatch">
            <div className="cards">
                <img src={props.imgsrc}  alt="image" className="cardImg" />
                <div className="cardInfo">
                    <h3 className="cardTitle">{props.title}</h3>
                    <p className="play">&#9658;</p>
                    {/* <button className="cardWatch">Watch Now</button> */}
                </div>
            </div>  
        </Link>
    );
}

export default Card;