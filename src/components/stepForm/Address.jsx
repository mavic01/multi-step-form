import { Container, TextField, Button } from "@material-ui/core"

const Address = ({formData, setFormData, navigation}) => {
    const {address, city, state, zip} = formData

    return (
        <Container maxWidth="xs">
            <h2 style={{color: "#533E85", fontWeight: "700"}}>Address</h2>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Address" name="address" value={address} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="City" name="city" value={city} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="State" name="state" value={state} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
                <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Zip" name="zip" value={zip} type="number" margin="normal" variant="outlined" autoComplete="off" fullWidth/>
            
            <div style={{marginTop: "1rem"}}>
                <Button onClick={() => navigation.previous()} variant="contained"  color="secondary" style={{marginTop: "1rem", marginRight: "2rem"}}>Previous</Button>
                <Button onClick={() => navigation.next()} variant="contained"  color="primary" style={{marginTop: "1rem"}}>Next</Button>
            </div>
            
        </Container>
    )
}

export default Address