import { useForm, useStep } from "react-hooks-helper"
import Names from "./stepForm/Names"
import Contact from "./stepForm/Contact"
import Address from "./stepForm/Address"
import Review from "./stepForm/Review"
import Submit from "./stepForm/Submit"

const defaultData = {
    firstName: "", //name in the input or TextField must be same as this here
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: ""
}

const steps = [{id: "names"}, {id: "address"}, {id: "contact"}, {id: "review"}, {id: "submit"}]

const MultiStepForm = () => {
    const [formData, setFormData] = useForm(defaultData)
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })

    const props = {formData, setFormData, navigation}

    switch (step.id) {
        case 'names':
            return <Names {...props}/>
        case 'address':
            return <Address {...props}/>
        case 'contact':
            return <Contact {...props}/>
        case 'review':
            return <Review {...props}/>
        case 'submit':
            return <Submit {...props}/>
    }

    console.log(step);
    return (
        <div>
            form
        </div>
    )
}

export default MultiStepForm