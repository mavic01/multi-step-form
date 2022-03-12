import { Container, TextField, Button } from "@material-ui/core"

const Contact = ({formData, setFormData, navigation}) => {
    const {phone, email} = formData

    return (
        <Container maxWidth="xs">
            <h2 style={{color: "#533E85", fontWeight: "700"}}>Contact</h2>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Phone" type="tel" name="phone" value={phone} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Email" type="email" name="email" value={email} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
                
            
            <div style={{marginTop: "1rem"}}>
                <Button onClick={() => navigation.previous()} variant="contained"  color="secondary" style={{marginTop: "1rem", marginRight: "2rem"}}>Previous</Button>
                <Button onClick={() => navigation.next()} variant="contained"  color="primary" style={{marginTop: "1rem"}}>Next</Button>
            </div>
            
        </Container>
    )
}

export default Contact