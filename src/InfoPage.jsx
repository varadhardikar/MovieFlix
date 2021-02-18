import React from "react";
import Data from "./Data";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

const Info = () =>{
    let { id } = useParams();
    const info = Data.find(i=>i.id==id);

    return(
        <div id="info">
            <img src={info.imgsrc} alt="image" className="image"/>
            <div id="about">
                <h1>Title:</h1>
                <h1 className="title">{info.title}</h1>
                <h2>Director:</h2>
                <h2 className="director">&#9757;.3{info.director}</h2>
                <p>Release Date:</p>
                <p className="release">&#9889;{info.reldate}</p>
                <p>Rating:</p>
                <p className="rating">&#11088;{info.rating}</p>
                <p className="watch">Watch Now</p>
                <p className="what">Trailer:</p>
                <div id="trailer">
                    <iframe width="560" height="315" src={info.linktrail} frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
                <p className="what">Movie:</p>
                <div id="video">
                    <iframe width="560" height="315" src={info.link} frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Info;