import { Container,Row,Col } from "react-bootstrap"
import "./error.css"
import { useHistory } from "react-router"
import FtrForm from "../Home/Form/Form"
const Error404 = ()=>{
	const history = useHistory()

	return(
		<div className="error">
             <div className="error-sec">
			<Container>
				<Row>
					<Col md={12}>
					<div className="bann-content">
						<div>
					
					<h1 className="page-title">4<span>0</span>4</h1>
					<h3>Oops!</h3>
					<p>The Page you are looking for does not exist</p>
					<a className="return_home" href={()=>false} onClick={()=>history.push("/")}>Return to Home</a>
					</div>
					</div>	
					</Col>
				</Row>
			


			</Container>
			
			</div>
			<FtrForm/>
		</div>
	)
}
export default Error404