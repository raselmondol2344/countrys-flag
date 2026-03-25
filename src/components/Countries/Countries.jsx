import React, { useState } from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import "./countries.css";
// import { Linter } from 'eslint';

const Countries = ({CountriesPromisse}) => {

    const [visitedCountry , setvisitedCountry] =useState([]);

    const HandlevisitedCountry = (country) =>{
        // console.log("visitedcountry clicked",country);
        const newvisitedcountry = [...visitedCountry ,country]
        setvisitedCountry(newvisitedcountry);
    }
    const countriesData = use(CountriesPromisse);
     const Countries = countriesData.countries;
    //  console.log(Countries);


    const [visitedFlag , setvisitedFlag] = useState([]);

    const handleVisitedFlag = (flags) => {
       const newVisitedFlag = [...visitedFlag,flags];
       setvisitedFlag(newVisitedFlag)
    }
   
    return (
        <div>
             <h1 className='title'>Countries Details : {Countries.length}</h1>
              <h3 className='title'>Total Visited Country : {visitedCountry.length}</h3> 
              <ol>
                {
                    visitedCountry.map(country=> <li
                    key = {country.cca3.cca3}
                    >{country.name.common}</li>)
                }
             </ol> 
             <h3 className='title'>Total Visited Flag : {visitedFlag.length}</h3>
             <div className='countries'>
                {
                Countries.map(country => 
                <Country key={country.cca3.cca3} country ={country} 
                 handlevisitedCountry={HandlevisitedCountry}
                 handleVisitedFlag = {handleVisitedFlag}
                 >
                     
                </Country>)
             }
             </div>
            
        </div>
    );
};




export default Countries;



