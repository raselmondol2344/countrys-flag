import React, { useState } from 'react';
import './country.css';

const Country = ({country, handlevisitedCountry,handleVisitedFlag}) => {
    //  console.log(country.name.common);
    // console.log(country.flags.flags.png);
    // console.log(handlevisitedCountry);

    const [visited , setvisited] = useState(false);


    const handleVisited = () => {
        // console.log("button clicked");
    //     setvisited(true);
    // way one 
    // if (visited){
    //     setvisited(false)
    // }
    // else{
    //     setvisited(true)
    // }


    // way two 
    // setvisited(visited? false: true)

    // way three 
    setvisited(!visited)

    if(handlevisitedCountry){
        handlevisitedCountry(country);
    }

    

    };
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name :{country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area >300000 ? "Big country": "Small country"}</p>

            <div className='btndiv'>
                <button className='btn' onClick={handleVisited }>
                {visited ? "Visited" : "Not Visited"}
            </button>

            <button className='btn' onClick={()=> {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
            </div>
            
        </div>
    );
};

export default Country;