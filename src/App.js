import './App.css';
import {useState,useEffect} from "react"
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/Footer"
import RouteConfig from './Components/RouteConfig/RouteConfig';
import {MainProvider} from "./Components/Context/GlobalState"
import Preloader from './Components/Preloader/preloader';
import Popup from "./Components/Popup/popup"
function App() {
    const [load,setLoad]=useState(true)
    const preFunc = ()=>{
        setLoad(false)
        document.body.classList.remove("overHide")
    }
    useEffect(()=>{
    
     setTimeout(()=>{
        preFunc()
     },6000)   
    },[])
    return ( 

        <MainProvider>
        <Router>
        <div className = "App" >
        {load ? <Preloader/> : null }
        <Header/> 
         <RouteConfig/>
        <Footer/>
       
        </div>
        </Router>
        <Popup/>
        </MainProvider>
    );
}

export default App;