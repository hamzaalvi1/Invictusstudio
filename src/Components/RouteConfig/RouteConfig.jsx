import { Switch, Route } from "react-router-dom"
import Home from "../Home/Home"
import VideoAnimation from "../Services/video-animation/video-animation"
import DigitalMarketing from "../Services/digital-marketing/digital-M"
import B2B from "../Services/website-development/b2b/b2b"
import CMS from "../Services/website-development/cms/cms"
import Ecommerce from "../Services/website-development/ecommerce/ecommerce"
import Responsive from "../Services/website-development/responsive/responsive"
import Android from "../Services/mobile-app/android/android"
import IOS from "../Services/mobile-app/ios/ios"
import About from "../About-Us/About"
import Portfolio from "../Portfolio/portfolio"
import Contact from "../Contact/Contact"
import PrivacyPolicy from "../Privacy-Policy/Privacy-Policy"
import Terms_Conditions from "../Terms-Conditions/Terms-Conditions"
import Pricing from "../Pricing/Pricing"
import Thankyou from "../Thankyou/thankyou"
import Errorpage from "../404/error"
const RouteConfig = ()=>{
	return(

		<div className="routeConfig">
           <Switch>
              <Route path = "/" exact component = {Home}/>
			 <Route path = "/video-animation" exact component = {VideoAnimation}/>
			 <Route path = "/digital-marketing" exact component = {DigitalMarketing}/>
			 <Route path = "/b2b" exact component = {B2B}/>
			 <Route path = "/cms" exact component = {CMS}/>
			 <Route path = "/e-commerce" exact component = {Ecommerce}/>
			 <Route path = "/responsive" exact component = {Responsive}/>
			 <Route path = "/android" exact component = {Android}/>
			 <Route path = "/ios" exact component = {IOS}/>
			 <Route path = "/about" exact component = {About}/>
			  <Route path = "/portfolio" exact component = {Portfolio}/>
			  <Route path="/contact" exact component = {Contact}/>
			  <Route path="/privacy-policy" exact component = {PrivacyPolicy}/>
			  <Route path="/terms-conditions" exact component = {Terms_Conditions}/>
			  <Route path="/pricing" exact component = {Pricing}/>
			  <Route path="/thank-you-sign-up" exact component = {Thankyou}/>
               <Route path="*" component={Errorpage}/>
		   </Switch>

		</div>

	)
}
export default RouteConfig