import {Container,Row,Col} from "react-bootstrap"
import {useContext} from "react"
import {MainContext} from "../../Context/GlobalState"
import FormBg from "../../../Assets/images/footer-form-bg.jpg"
import {useState,useRef} from "react"
import "./form.css"
import Validations from "../../Utils/validations"
const Form = () =>{
const [captchaToken,setCaptchaToken]=useState(null);

	
	const countryData = useContext(MainContext)
	const {CountryList} = countryData
	const [formData,setFormData] = useState({cn: "",ce: "",phn: "",cpcode: "1",pc:"United States"}) 
    const formRef = useRef(null) 
     const [validError,setValidError] = useState({})
	const countryPicker = (evt)=>{
      const countryCode = CountryList.find((country)=> country.name === evt.target.value )
		 setFormData({...formData,[evt.target.name]:evt.target.value,cpcode:countryCode.code})
	}
	const onFormSubmit = (evt)=>{
		evt.preventDefault()
        setValidError(Validations(formData))
        if(formData.cn !== "" && formData.ce !== "" & formData.phn !==""){
            window.grecaptcha.ready(function() {
                window.grecaptcha.execute('6LcYfcMZAAAAAHk3OEycb7p7EyKBMPf6RwbnERxT', { action: 'submit' }).then(function(token) {
                    setCaptchaToken(token);
                    if (Object.keys(validError).length==0) {
                        formRef.current.submit()
                    }
                });
            });
        }
	} 
    const handleChange = (evt)=>{
        setFormData({
            ...formData,[evt.target.name]:evt.target.value
        })
      }
	return(
		<section className="footer-form-sect" style={{background:`url(${FormBg})`}}> 
          <Container>
            <Row>
                <Col md={5} lg={5} xl={5} sm={12} xs={12}>
                    <div class="desc-box">
                        <h3>
                            Got an Idea?
                        </h3>
                        <h2>
                            Lets Get In Touch
                        </h2>
                        <p>
                            Let’s discuss your project and find out what we can do to provide value.
                        </p>
                    </div>
                </Col>
                <Col md={7} lg={7} xl={7} sm={12} xs={12}>
                    <div className="form-box">
                        <form name="main_form" action="http://staging.invictusstudio.com/account/Signup" ref={formRef} method="get" className="jform" noValidate="noValidate" onSubmit={onFormSubmit}>
                            <Row>
                                <Col md={6}>
                                    <div className="field" > 
                                        {/* <label htmlFor="cn">Name</label> */}
                                        <input className="required" type="text" name="cn" placeholder="Full Name" value={formData.cn}
										 onChange={handleChange}
                                         style={{borderColor: validError.cn ? "#ff0000": "#fff"}}
                                         required/>
                                          <div>{validError.cn && <p className ="ftr_errors_valid" style={{color: "#ff0000"}}>{validError.cn}</p>} </div>
                                    </div>
                                </Col>
                                <Col  md={6}>
                                    <div className="field" >
                                        {/* <label htmlFor="ce">Email</label> */}
                                        <input className="required email" type="text" name="ce" placeholder="Email" value={formData.ce}
										onChange={handleChange} required
                                        style={{borderColor: validError.ce ? "#ff0000": "#fff"}}/>
                                          <div>{validError.ce && <p className ="ftr_errors_valid" style={{color: "#ff0000"}}>{validError.ce}</p>} </div>

                                    </div>
                                </Col>
                                <Col  md={6}>
                                    <div className="field">
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
                                        <i className="fa fa-chevron-down"></i>
                                    </div>
                                </Col>
                                <Col  md={6}>
                                    <Row>
                                        <div className="field code">
                                            <input name="cpcode" disabled="" type="text" value={`+${formData.cpcode}`}/>
                                        </div>
                                        <div className="field number">
                                            {/* <label htmlFor="phn">Phone #</label> */}
                                            <input name="phn" className="required number" type="tel" placeholder="Phone #"
                                            style={{borderColor: validError.cn ? "#ff0000": "#fff"}}
                                             value={formData.phn}
											onChange={handleChange} />
                                          <div>{validError.phn && <p className ="ftr_errors_valid" style={{color: "#ff0000"}}>{validError.phn}</p>} </div>

                                        </div>
                                    </Row>
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
                                <Col md={12} className="text-left">
                                    <div className="btn-box">
                                        <button type="submit" >Submit Now <i className="fas fa-chevron-right"></i></button>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
           
			</Row>
			</Container>
    </section>

	)
}
export default Form