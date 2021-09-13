import {Container,Row,Col} from "react-bootstrap"
import "./contact.css"
import {useContext} from "react"
import {MainContext} from "../Context/GlobalState"
import {useState,useRef,useEffect} from "react"
import { useHistory } from "react-router-dom";
import ico1 from "../../Assets/images/contact/icons/01.png"
import ico2 from "../../Assets/images/contact/icons/02.png"
import ico3 from "../../Assets/images/contact/icons/03.png"
import ico4 from "../../Assets/images/contact/icons/04.png"
import ico5 from "../../Assets/images/contact/icons/05.png"
import SocialIcons from "../Home/Social-Icons/Social-icons"
import {Helmet} from "react-helmet";
import Validations from "../Utils/validations"



import Preloader from "../../Components/Preloader/preloader"


const Contact = ()=>{
	const countryData = useContext(MainContext)
	const {CountryList} = countryData
	const [formData,setFormData] = useState({cn: "",ce: "",phn: "",cpcode: "1",pc:"United States"}) 
    const formRef = useRef(null) 
	const [load,setLoad]=useState(true)
	const [validError,setValidError] = useState({})
	const [captchaToken,setCaptchaToken]=useState(null);

    const preFunc = ()=>{
		
        setLoad(false)
        document.body.classList.remove("overHide")
    }
    useEffect(()=>{
    
     setTimeout(()=>{
        preFunc()
     },1000)   
    },[])


	const countryPicker = (evt)=>{
		const countryCode = CountryList.find((country)=> country.name === evt.target.value )
		setFormData({...formData,[evt.target.name]:evt.target.value,cpcode:countryCode.code})
   }
   const handleChange = (evt)=>{
	setFormData({
		...formData,[evt.target.name]:evt.target.value
	})
  }
   const onFormSubmit = (evt)=>{
	evt.preventDefault()
	setValidError(Validations(formData))
	if(formData.cn !== "" && formData.ce !== "" & formData.phn !==""){
		window.grecaptcha.ready(function() {
			window.grecaptcha.execute('6LcYfcMZAAAAAHk3OEycb7p7EyKBMPf6RwbnERxT', { action: 'submit' }).then(function(token) {
				setCaptchaToken(token);
				if (Object.keys(validError).length==0) {
					// formRef.current.submit()
				}
			});
		});
	}
	  
   } 
  

	return(
		<div className = "contact-us">
			<Helmet>
			<meta name="description" content="We love to hearing from you. Simply fill out the brief form below, we will get back to you shortly."/>
            <title>Contact Us | Invictus Studio</title>
			</Helmet>
              {load ? <Preloader/> : null }
        <SocialIcons/>
		<section className="inner-banner contact-us">
        <div className="wrapper">
			<Container>
				<Row>
				 <Col md={12}>	
          
		
                    <h3>
                        Contact us
                    </h3>
					</Col>
				</Row>
			</Container>
        </div>
    </section>
	<section className="contact__form">
		<Container>
			<Row>
				<Col md={12}>
					<h4>WE LOVE TO HEAR. WE LOVE TO SHARE.</h4>
				</Col>
				<Col md={8} lg={8} xs={12} sm={12}xl={8}>
					<div className="cf_form">
						<form name="main_form" action="http://staging.invictusstudio.com/account/Signup" ref={formRef} method="get" className="jform" noValidate="noValidate" onSubmit={onFormSubmit}>
							<Row>
							<Col md={12}>	
							<div className="cf_fm" style={{borderColor: validError.cn ? "#ff0000": "#ccc"}}>
								<input type="text" name="cn" placeholder="Full Name" required  value={formData.cn} onChange = {handleChange}/>
							</div>
							<div>{validError.cn && <p className ="errors_valid" style={{color: "#ff0000"}}>{validError.cn}</p>} </div>

							</Col>
							<Col md={12}>	
							<div className="cf_fm" style={{borderColor: validError.ce ? "#ff0000": "#ccc"}}>
								<input type="email" name="ce" placeholder="Email Address" value={formData.ce} required  onChange = {handleChange}/>
							     
							</div>
							<div>{validError.ce && <p className ="errors_valid" style={{color: "#ff0000"}}>{validError.ce}</p>} </div>

							</Col>
							<Col md={12}>	
							<div className="cf_fm">
								<select name=""  name="pc"  onChange={(evt)=>countryPicker(evt)}>
								<option defaultValue="US" selected>
                                         United States
                                          </option>
                                            {CountryList.map((country)=>{
												return(
                                                    
													<option value={country.name} key={country.abbr}>
                                                          {country.name}
													</option>

												)

											})}
								</select>
							</div>
							</Col>
							<Col md={4}>	
							<div className="cf_fm">
								<input  name="cpcode" disabled="" type="text" value={`+${formData.cpcode}`}  />
							</div>
							</Col>
							<Col md={8}>	
							<div className="cf_fm" style={{borderColor: validError.phn ? "#ff0000": "#ccc"}}>
								<input type="number" name="phn"  placeholder="Phone Number" required
								value={formData.phn} onChange = {handleChange} />

							</div>
							<div>{validError.phn && <p className ="errors_valid" style={{color: "#ff0000"}}>{validError.phn}</p>} </div>

							</Col>
							<Col md={12}>	
							<div className="cf_fm">
								<textarea placeholder="Message"></textarea>
							</div>
							</Col>
							<Col md={12}>
							<input type="hidden" value="Top main form" name="sfp"/>
                                <input type="hidden" value="/" name="su"/>
             	            	 <input type="hidden"  name="ctry"/>
             	                 <input type="hidden"  name="tp" value="1"/>
                                 <input type="hidden"  name="pth" value="/"/>
                                <input type="hidden" value="0" name="bdgt"/>
                              <input type="hidden" name="ts" value=""/>
							  <input type="hidden" name="g-recaptcha-response" value={captchaToken} className="recatchaResponse"/>
							
							</Col>
							<Col md={12}>	
							<div className="cf_fm sbt" >
								<input type="submit" value="Submit" />
							</div>
							</Col>

							</Row>

						</form>
					</div>
				</Col>
				<Col>
				<ul className="contact-detals">
            <li className="first"> <span><i className="fas fa-map-marker-alt"></i></span>
			<div className="cf_det">
            <h5>Southlake, Tx</h5>
            <p><a href="https://goo.gl/maps/LTK1RRqXaE9S4oFT9" target="_blank">950 E Hwy 114 Suite 160,<br/> Southlake, TX 76092</a></p>
			</div>
          </li>
          <li> <span ><i className="fa fa-mobile" aria-hidden="true"></i></span>
		    <div className="cf_det">
            <h5>Toll Free Number</h5>
            <p><a href="tel:+18006644191">+1-800-664-4191</a></p>
			</div>
          </li>
          <li className="last"> <span><i className="fa fa-envelope" aria-hidden="true" ></i></span>
		    <div className="cf_det"> 
            <h5>Email</h5>
            <p><a href="mailto:info@invictusstudio.com">info@invictusstudio.com </a></p>
			</div>
          </li>
        </ul>
		<ul className="social-links">
          <li className="first"><a href="https://www.facebook.com/invictusstudioofficial" target="_blank"><img src={ico1}/></a></li>
          <li><a href="https://www.instagram.com/invictusstudioofficial/" target="_blank"><img src={ico2}/></a></li>
          <li><a href="https://www.youtube.com/channel/UCwnuXFewKOIOuIWVByD8Tow" target="_blank"><img src={ico3}/></a></li>
		  <li><a href="https://www.pinterest.com/invictusstudio/" target="_blank"><img src={ico5}/></a></li>
          <li className="last"><a href="https://twitter.com/InvictusOff" target="_blank"><img src={ico4}/></a></li>
         
        </ul>
				</Col>
			</Row>
		</Container>
	</section>
	{/* <FtrForm/> */}

		</div>
	)
}
export default Contact