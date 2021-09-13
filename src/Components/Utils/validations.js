

const Validations = (values) => {
	let errors={}
	if(!values.cn){
		errors.cn = "Name is required"
	}
	if(!values.ce){
		errors.ce = "Email is required"
	}
	else if(!/\S+@\S+\.\S+/.test(values.ce)){
		errors.ce = "Email is invalid."
	}
	if(!values.phn){
		errors.phn = "Phone Number is Required"
	}
	return errors
}

export default Validations
