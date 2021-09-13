import HeroSlider from "./Hero-Slider/hero-slider"
import PrcSec from "./Prc-sec/prc-sec"
import Cta from "./Cta/Cta"
import Portfolio from "./Portfolio/Portfolio"
import OurServices from "./Services/Services"
import Testimonials from "./Testimonials/Testimonials"
import CaseStudies from "./Case-Studies/case-studies"
import Award from "./Award/Award"
import FtrForm from "./Form/Form"
import SocialIcons from "./Social-Icons/Social-icons"
import {useEffect} from "react"
const Home = ()=>{
	useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])

return(
	<div className="home">
      <HeroSlider/>
	  <SocialIcons/>
	  <PrcSec/>
	  <Cta/>
	  <Portfolio/>
	  <OurServices/>
	  <Testimonials/>
	  <CaseStudies/>
	  <Award/>
	  <FtrForm/>

	</div>
)

}

export default Home