import { Container, TextField, Button } from "@material-ui/core"

const Names = ({formData, setFormData, navigation}) => {
    const {firstName, lastName, nickName} = formData
    
    return (
        <Container maxWidth="xs">
            <h1 style={{fontWeight: "700", color: '#495371'}}>Mavic Contact Form</h1>
            <h2 style={{color: "#533E85", fontWeight: "700"}}>Name</h2>
            <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="First Name" name="firstName" value={firstName} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
            <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Last Name" name="lastName" value={lastName} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
            <TextField style={{backgroundColor: 'white'}} onChange={setFormData} label="Nick Name" name="nickName" value={nickName} margin="normal" variant="outlined" autoComplete="off" fullWidth/>
            <Button onClick={() => navigation.next()} variant="contained" fullWidth color="primary" style={{marginTop: "1rem"}}>Next</Button>
        </Container>
    )
}

export default Names