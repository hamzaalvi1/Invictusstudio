import React, {createContext,useState} from "react"
// import {FetchCountries} from "../FetchHook/fetchhook"
import CountryList from "../../Assets/country-data/countries.json"




export const MainContext = createContext()


export const MainProvider =  ({children})=>{


const [isPopupOpen,setPopupOpen] = useState(false)

const popOpen = ()=>{
    setPopupOpen(true)
    document.body.classList.add("overHide")
}



return(
    <MainContext.Provider value= {{CountryList,isPopupOpen,setPopupOpen,popOpen}}>
        {children}
    </MainContext.Provider>
)

}