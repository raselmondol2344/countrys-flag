
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'







function App() {

  const CountriesPromisse = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());


  return (
    <>
   
    <Suspense fallback = {<p>Data Loading......</p>}>
      <Countries CountriesPromisse = {CountriesPromisse} ></Countries>
    </Suspense>

    </>
      
)
}




export default App

