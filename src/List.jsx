import React from "react";
import Card from "./Cards";
import Data from "./Data";

export const List = () =>{
    return(
        <div>
            {Data.map(
                (val)=>(
                    <Card 
                        key={val.id}
                        id={val.id}
                        imgsrc= {val.imgsrc}
                        title= {val.title} />
                )
            )}
        </div>
    );
}

