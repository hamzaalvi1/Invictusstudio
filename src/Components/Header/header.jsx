import {Container,Row,Col} from "react-bootstrap"
import logo from "../../Assets/images/logo.png"
import "./header.css"
import {NavLink,Link} from "react-router-dom"
import {MainContext} from "../Context/GlobalState"
import useMediaQuery from "../Utils/windowSize"
import {useState,useContext} from "react"
import {useLocation} from "react-router-dom"


const Header = ()=>{
	const location = useLocation()
	const countryData = useContext(MainContext)
	const {setPopupOpen} = countryData

	const matches = useMediaQuery("(max-width: 824px)");
	const linksArr = [ 
		{title:"Home",path: "/"},
		{title:"About Us",path: "/about"},
		{title:"Portfolio",path:"/portfolio"},
		
	]
	const popOpen = ()=>{
		setPopupOpen(true)
		document.body.classList.add("overHide")
	}
	const [menuOpen,setMenuOpen]= useState(false)
const openMenuResponsive = ()=>{
setMenuOpen(!menuOpen)
if(!menuOpen){
    document.body.classList.add("overHide")
}
else{
    document.body.classList.remove("overHide")

}
}
const [isHeight,setIsHeight] = useState(false)
const [iswebHeight,setwebHeight] = useState(false)
const [ismblHeight,setmblHeight] = useState(false)

const cssProp = {
	maxHeight: isHeight ? "350px" : "0",
	visibility: isHeight ? "visible" : "hidden"
}
const webprop = {
	maxHeight: iswebHeight ? "220px" : "0",
	visibility: iswebHeight ? "visible" : "hidden"

}
const mbleprop = {
	maxHeight: ismblHeight ? "220px" : "0",
	visibility: ismblHeight ? "visible" : "hidden"
}
const mainResp = ()=>{
	setIsHeight(!isHeight)
	setwebHeight(false)
	setmblHeight(false)
	
}

const mobileheight =()=>{
	setmblHeight(!ismblHeight)
	setwebHeight(false)
}
const webheight =()=>{
	setmblHeight(false)
	setwebHeight(!iswebHeight)
}
const menuClose = () =>{
	setMenuOpen(false)
}
let routes=["/pricing",'/about','/contact',"/portfolio","/responsive","/cms","/b2b","/e-commerce","/android","/ios","/video-animation","/digital-marketing","/"];

return(
	<div className="header" style={{background: (routes.includes(location.pathname) === true) ? "transparent" : "#231e2e"}}>
		<Container>
			<Row className="align-items-center">
				<Col md={3} sm={8} xs={8} xl={3}>
					<Link to="/"><img src={logo} alt="logo"  className="logo"/></Link>
				</Col>
					{/* laptop screen start */}
				<Col md= {9} sm={4} xs={4} xl={9}>
					{
					matches ? 
					<div className="open_closeIco">
						<a href="javascript:;" onClick={openMenuResponsive}>
						{menuOpen ?
				    	<i className="fas fa-times"></i>  :<i className="fas fa-bars"></i>
                         } 
						</a>   
					  </div>
					  :
					<ul className="main-menu" style={{display: location.pathname === "/thankyou" ? "none" : "flex"}}>
						
					
						<li><NavLink exact to="/">Home</NavLink></li>
						

						<li className="drop-down"><a href="#">Services</a>
						<ul className="sub_menu">
					    	<li className="web-drop"><a href="#" >Website Development <i className="fas fa-caret-right"></i></a>
							<ul className="web_menu">
                            <li ><NavLink exact to="/responsive">Responsive</NavLink></li>
                            <li ><NavLink  exact to="/cms">CMS</NavLink></li>
                            <li><NavLink  exact to="/b2b">B2B</NavLink></li>
                            <li ><NavLink exact to="/e-commerce">Ecommerce</NavLink></li>


						</ul>
							</li>
							{/* <li><a href = {()=> false}>Logo Design</a></li> */}
							<li ><NavLink exact to="/video-animation">Video Animation</NavLink></li>

                            <li  className="mble-drop"><a href="#">Mobile Application <i className="fas fa-caret-right"></i></a>
							<ul className="mble_menu">
                            <li><NavLink exact to="/android">Android Development</NavLink></li>
                            <li ><NavLink  exact to="/ios">IOS Development</NavLink></li>
						</ul>
							</li>
							
                            <li><NavLink exact to="/digital-marketing">Digital Marketing</NavLink></li>
                            
                         
						</ul>
						</li>
						<li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
						<li ><NavLink exact to="/pricing">Packages</NavLink></li>
						<li><NavLink exact to="/about">About Us</NavLink></li>
						<li ><NavLink exact to="/contact">Contact Us</NavLink></li>

						<li><a href={() => false} onClick={popOpen} className="getStarted">Get Started</a></li>
					</ul>
					 
					
					}

				</Col>
					{/* laptop screen end */}

				{ matches ?
				<Col md={12}>
				<div className={menuOpen ? "resp_menu __right":"resp_menu"}  >
					<h2>Menu</h2>
				<ul className="res-main-menu">

						
						{linksArr.map((links)=>{
						return(
						<li key ={links.title}>
                        <NavLink exact to={links.path} onClick = {menuClose}>{links.title}</NavLink></li>)		
						})}
						<li className="resp_serv"  ><a href={()=>false} onClick = {mainResp}>Services {isHeight ? <i class="fas fa-caret-down"></i> : <i class="fas fa-caret-right"></i>}</a>					
						<ul className="sub__menu" style={{...cssProp}}>
							
							<li className="webMenu"><a href= {()=>false }onClick = {webheight}>Website Development {iswebHeight ? <i class="fas fa-caret-down"></i> : <i class="fas fa-caret-right"></i>}</a>
							  <ul style={{...webprop}}>
								  <li><NavLink exact to="/responsive" onClick = {menuClose}><i class="fas fa-square-full"></i> Responsive</NavLink></li>
								  <li><NavLink exact to="/cms" onClick = {menuClose}><i class="fas fa-square-full"></i> CMS</NavLink></li>
								  <li><NavLink exact to="/e-commerce" onClick = {menuClose}><i class="fas fa-square-full"></i> E-commerce</NavLink></li>
								  <li><NavLink exact to="/b2b" onClick = {menuClose}><i class="fas fa-square-full"></i> B2B</NavLink></li>

							  </ul>
							</li>
							<li><NavLink exact to="/video-animation" onClick = {menuClose}>Video Animation</NavLink></li>
							
							<li className="webMenu"><a href= {()=>false} onClick={mobileheight}>Mobile Application {ismblHeight ? <i class="fas fa-caret-down"></i> : <i class="fas fa-caret-right"></i>}</a>
							<ul style={{...mbleprop}}>
								  <li><NavLink exact to='/android' onClick = {menuClose}><i class="fas fa-square-full"></i> Android</NavLink></li>
								  <li><NavLink exact to="/ios" onClick = {menuClose}><i class="fas fa-square-full"></i> IOS</NavLink></li>
								

							  </ul>
							</li>
							<li><NavLink exact to="/digital-marketing" onClick = {menuClose}>Digital Marketing</NavLink></li>
							
						</ul>
						</li>
						<li ><NavLink exact to="/pricing" onClick = {menuClose} >Packages</NavLink></li>
						<li ><NavLink exact  to="/contact" onClick = {menuClose} >Contact Us</NavLink></li>

					</ul>
					</div>
				</Col> : null}
		
			

			</Row>
		</Container>
     
	</div>

)
}
export default Header