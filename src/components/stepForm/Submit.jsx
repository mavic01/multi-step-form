import { Container, TextField, Button } from "@material-ui/core"

const Submit = ({formData, setFormData, navigation}) => {
    const {phone, email} = formData

    return (
        <Container maxWidth="sm" style={{marginTop: "4rem", color: 'green'}}>
            <h2>Thanks for filling out the form. We'll be in touch!</h2>
        </Container>
    )
}

export default Submit