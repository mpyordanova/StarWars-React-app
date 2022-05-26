import React from "react";
import { useNavigate } from "react-router-dom";

const Planet = ({apiResponse}) =>{
    return(
        <div className='planet'>
            {
                apiResponse?.results?.map((planet)=>{
                    return (
                        <div key={planet.name}>
                            <h2>{planet.name}</h2>
                            <img src={planet.url}/>
                            <h3>{planet.name}'s climate is {planet.climate} and the gravity is {planet.gravity}.</h3>
                            </div>
                    )
                })
            }
        </div>

    )
}

export default Planet