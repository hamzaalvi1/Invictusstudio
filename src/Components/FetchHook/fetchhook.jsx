import {useState,useEffect } from "react"
import axios from "axios"
import CountryJson from "../../Assets/country-data/countries.json"

export const FetchCountries = ()=>{
	
	const [countryData,setCountryData] = useState([])
	useEffect(()=>{
      axios.get(`http://restcountries.eu/rest/v2/all`)
	  .then(response => response.data)
	  .then(data => setCountryData(data))
	  .catch(err => console.log(err))
		
	},[])
	return{
		countryData	
	}
}