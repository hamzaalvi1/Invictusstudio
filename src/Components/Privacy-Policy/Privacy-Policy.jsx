import { Container,Row,Col } from "react-bootstrap"
import "./privacy.css"
import FtrForm from "../Home/Form/Form"
import {useEffect} from "react"
import {Helmet} from "react-helmet";

const PrivacyPolicy = ()=>{
    useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])

	return(
		<div className="terms_n_condition">
            <Helmet>
            <meta name="description" content="The privacy of our customers is of utmost importance. Invictus Studio is always dedicated to keeping your information secure."/>
            <title>Invictus Studio</title>
            </Helmet>
		<section className="inner-banner pp">
        <div className="wrapper">
           <Container>
			   <Row>
				  <Col md={12}>
                <div className="desc">
                    <h3>
                        Privacy Policy
                    </h3>
                </div>
				</Col>
				</Row>
			</Container>
            
        </div>
    </section>
	
    <section class="tnt-desc">
        <Container>
			<Row>
			 <Col md={12}>	
            <div class="head-desc">
               
            </div>
            <p>
                This privacy policy sets out how Invictus Studio uses and protects any information that you give Invictus Studio when you use this website.
            </p>
            <p>

                Invictus Studio is committed to ensuring that your privacy is protected. Should we request specific
                information by which you can be identified when using this website, then we assure you it will only be
                used in accordance with this privacy statement.

            </p>
            <p>
                Invictus Studio may revise this policy from time to time by updating this page. You may want to visit this
                page occasionally to ensure that you are happy with any changes.
            </p>
            <p>
                <b>What We Do With The Information We Collect</b>
                We require this information to understand your needs and offer you a better service, and in particular
                for the following reasons:
            </p>
            <p>
                Internal record keeping;
            </p>
            <p>

                We may utilize the information to improve our products and services;
            </p>
            <p>

                From time to time, we may also utilize your information to make contact for market research purposes.
                Contact may be made by phone, email, fax or mail. We may utilize the information to customize the
                website considering your interests.
            </p>
            <p>
                <b>Security</b>
                We are dedicated to ensuring that your information remains secure. In order to prevent disclosure or
                unauthorized access, we have established suitable physical, electronic and managerial procedures to
                secure and safeguard the information that we collect online.
            </p>
            <p>
                <b>How We Use Cookies</b>
                A cookie is a small data file that seeks your permission to be positioned on your computer’s hard drive.
                Once you agree, the file is added, which then helps analyze web traffic or lets you know when you visit
                any particular site.
            </p>
            <p>
                With cookies, we applications can respond to you individually. The web application can modify its
                operations based on your needs, likes and dislikes by collecting and remembering information about your
                preferences. We employ traffic log cookies to identify which pages are being used. This helps us analyze
                data about webpage traffic and improve our website in order to meet customer needs. We strictly use this
                information for statistical analysis purposes and later remove the data from the system. Overall,
                cookies enable us to monitor which pages you find useful and which you do not, allowing us to provide
                you with a better website. Rest assured, a cookie does not give us access to your computer at all or any
                information about you, except the data you choose to share with us voluntarily. You have the choice to
                accept or decline cookies. Most web browsers automatically accept cookies, but you can usually alter
                your browser setting to decline cookies. However, this may prevent you from taking full advantage of the
                website.
            </p>
            <p>
                <b>Controlling Your Personal Information</b>
                We will not distribute, sell or release your personal information to third parties unless we are
                required by law to do so or have your permission. We might make use of your personal information to send
                you promotional information about third parties which we believe you may find interesting if you tell us
                that you wish this to happen.

            </p>
            <p>
                If you believe that the information we are holding on you is inaccurate or incomplete, please write to
                or email us as soon as possible at our email address. We will promptly rectify any information found to
                be incorrect.
            </p>
			</Col>
            </Row>
        </Container>
    </section>
	<FtrForm/>


		</div>
	)
}
export default PrivacyPolicy