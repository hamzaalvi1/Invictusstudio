import "./popup.css"
import {useContext,useState,useRef} from "react"
import {MainContext} from "../Context/GlobalState"
import Validations from "../Utils/validations"
import Axios from "axios"

import { Container,Row,Col } from "react-bootstrap"

const Popup = ()=>{
const [captchaToken,setCaptchaToken]=useState(null);

	const formRef = useRef(null)
	const countryData = useContext(MainContext)
	const {isPopupOpen,setPopupOpen} = countryData
	const {CountryList} = countryData
     const closePopup = ()=>{
		document.body.classList.remove("overHide")
		setPopupOpen(false)
	 }
	 const handleChange = (evt)=>{
       setFormData({
		   ...formData,[evt.target.name]:evt.target.value
	   })
	 }
	const [formData,setFormData] = useState({cn: "",ce: "",phn: "",cpcode: "1",pc:"United States"}) 
	const countryPicker = (evt)=>{
		const countryCode = CountryList.find((country)=> country.name === evt.target.value )
		setFormData({...formData,[evt.target.name]:evt.target.value,cpcode:countryCode.code})
   }
   const [validError,setValidError] = useState({})

   const handleForm = (evt)=>{
     evt.preventDefault()
	 setValidError(Validations(formData))
	 if(formData.cn !== "" && formData.ce !== "" & formData.phn !==""){
		window.grecaptcha.ready(function() {
			window.grecaptcha.execute('6LcYfcMZAAAAAHk3OEycb7p7EyKBMPf6RwbnERxT', { action: 'submit' }).then(function(token) {
				setCaptchaToken(token);
				if (Object.keys(validError).length==0) {
					Axios.post("http://staging.invictusstudio.com/account/API/SignUp/Post",{
						Name: formData.cn,
						email: formData.ce,
						CountryId: formData.cpcode,
						Phone: formData.phn,
						ReCaptchaToken: captchaToken
					}
					)
					.then(res =>console.log(res))
					.catch(err=>console.log(err))

					formRef.current.submit()
				}
			});
		});
	}


   }
	return(
		<div className="Popup">
			<div className="overlay-pop" style={{display: isPopupOpen ? "block" : "none"}} onClick={closePopup}></div>
			<div className="pop-parent" style={{display: isPopupOpen ? "block" : "none"}}>
			<div className="popup-main" >
				<a href="javascript:;" onClick={closePopup} className="pop-close"><i class="fas fa-times-circle"></i></a>
				<div className="pop-content">
					<h2>
					Get Your <span>Free Quote</span>
					</h2>
					<div className="pop_form" >
					{/* https://www.invictusstudio.com/account/API/SignUp/Post */}
					{/* http://staging.invictusstudio.com/account/Signup */}
						<form ref={formRef} name="main_form" onSubmit={handleForm} className="jform" noValidate="noValidate" >
						<Container>
				    	<Row>
						<Col md={12}>	
						  <div className="pop_fld" style={{borderColor: validError.cn ? "#ff0000": "#fff"}}>
							  <input type="text" name="cn" placeholder="Full Name" value={formData.cn} onChange={handleChange}/>
						        <div>{validError.cn && <p className ="errors_valid" style={{color: "#ff0000"}}>{validError.cn}</p>} </div>
						  </div>
						  </Col>
						  <Col md={12}>	
						  <div className="pop_fld" style={{borderColor: validError.ce ? "#ff0000": "#fff"}}>
							  <input type="email"  name = "ce" placeholder="Email Address" value={formData.ce} onChange={handleChange}  />
							  <div> {validError.ce && <p className="errors_valid" style={{color: "#ff0000"}}>{validError.ce}</p>} </div>
						      
						  </div>
						  </Col>
						  <Col md={12}>	
						  <div className="pop_fld">
						  <select className="countrylist required" name="pc" onChange={(evt)=>countryPicker(evt)}>
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
						  <Col md={2}>	
						  <div className="pop_fld">
						  <input name="cpcode" disabled type="text" value={`+${formData.cpcode}`}/>
						  </div>
						  </Col>
						  <Col md={10}>	
						  <div className="pop_fld"style={{borderColor: validError.phn ? "#ff0000": "#fff"}} >
							  <input type="number" name="phn" placeholder="Phone Number" value={formData.phn} onChange={handleChange} />
							  <div>{validError.phn && <p className ="errors_valid" style={{color: "#ff0000"}}>{validError.phn}</p>} </div>
						      
						  </div>
						  </Col>
						   <Col md={12}>
							   <h6>SIGN UP NOW & RESERVE YOUR DISCOUNT</h6>
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
							   <div className="pop_submit">
								   <input type="submit" value="Submit" />

							   </div>
						   
						   </Col>
						  </Row>
						  </Container>
						</form>
				
					</div>
				</div>
				
			</div>
			</div>

 
        
	  
	  


		</div>
	)
}
export default Popup