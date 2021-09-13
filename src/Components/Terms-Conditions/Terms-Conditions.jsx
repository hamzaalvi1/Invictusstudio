import { Container,Row,Col } from "react-bootstrap"
import "./terms.css"
import FtrForm from "../Home/Form/Form"
import { useEffect } from "react"
import {Helmet} from "react-helmet";

const Terms_Conditions = ()=>{
    useEffect(()=>{

        window.scrollTo(0,0) 
      
   
   },[])
	return(
		<div className="terms_n_condition">
            <Helmet>
            <meta name="description" content="the information on the website is strictly for general informational purposes. The company is not responsible for how you use the information on the website."/>
            <title>Invictus Studio</title>
            </Helmet>
		<section className="inner-banner tnc">
        <div className="wrapper">
           <Container>
			   <Row>
				  <Col md={12}>
                <div className="desc">
                    <h3>
					   Terms &  <br/>Condition
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
            
            <p>
                Welcome to Invictus Studio. If you continue to browse and use this website, you are bound by the following
                terms and conditions and agree to comply with them, which along with our privacy policy govern Design
                Esteem’s relationship with you in relation to this website. In case you disagree with any segment of
                these terms and conditions, please do not use our website.
            </p>
            <hr/>
            <p>
                The term ‘Invictus Studio’ or ‘us’ or ‘we’ refers to the owner of the website whose registered office is
                401 Broadway, Suite XXX, New York, Dubai. The term ‘you’ refers to the viewer or user of Invictus Studio’s
                website.
            </p>
            <p>
                The use of this website is subject to the following terms of use:
            </p>
            <p>
                The content of the pages of this website is solely for your general information and use. Hence, it is
                subject to change without notice. This website employs cookies to monitor browsing preferences. If you
                choose to allow cookies, we may store some personal information given voluntarily by you for use by
                third parties.
            </p>
            <p>
                Neither we nor any third parties offer any guarantee or warranty as to the timeliness, accuracy,
                performance, completeness or suitability of the information and materials found or available on this
                website for any particular purpose. You acknowledge that the information provided may contain errors or
                inaccuracies. We aren’t liable for any such inaccuracies or errors to the greatest extent permitted by
                law.
            </p>
            <p>
                Your use of any information or materials on this website is completely at your own risk; we shall not be
                liable. It is your own responsibility to ensure that any services, products or information present om
                this website meet your specific requirements.
            </p>
            <p>
                This website contains material which is licensed to or owned by us. This material includes layout,
                design, appearance, look, and graphics but is not limited to it. Reproduction of the material is
                strictly prohibited other than in accordance with the copyright notice, which forms part of these terms
                and conditions.
            </p>
            <p>
                All trade-marks reproduced in this website which are not the property of, or licensed to, the operator
                are acknowledged on the website.
            </p>
            <p>
                Unauthorized use of this website may be a criminal offense or lead to a claim for damages.
            </p>
            <p>
                This website may also incorporate links to other websites from time to time, which are provided for your
                convenience to give you further information. This, however, does not signify that we endorse the
                website(s). We don’t hold any responsibility for the content of the linked website(s).
            </p>
            <p>
                Your use of this website and any dispute erupted of such use of the website is subject to the laws of
                New York State and the United Arab Emirates.
            </p>
			</Col>
            </Row>
        </Container>
    </section>
	<FtrForm/>


		</div>
	)
}
export default Terms_Conditions