import { Button, IconButton, Container, Accordion, AccordionSummary, AccordionDetails, ListItemText} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import ExpandMore from "@material-ui/icons/ExpandMore"

const Contact = ({formData, setFormData, navigation}) => {
    const {go} = navigation
    const {firstName, lastName, nickName, address, city, state, zip, phone, email} = formData

    return (
        <Container maxWidth="xs">
            <h2 style={{color: "#533E85", fontWeight: "700"}}>Review</h2>
            <RenderAccordion summary="Names" go={go} details={[
                { 'First Name': firstName },
                { 'Last Name': lastName },
                { 'Nick Name': nickName }
            ]} />
            <RenderAccordion summary="Address" go={go} details={[
                { 'Address': address },
                { 'City': city },
                { 'State': state },
                { 'Zip': zip },
            ]} />
            <RenderAccordion summary="Contact" go={go} details={[
                { 'Phone': phone },
                { 'Email': email }
            ]} />
            <Button onClick={() => go('submit')} style={{marginTop: "1.5rem"}} color="primary" variant="contained">Submit</Button>
        </Container>
    )
}

export const RenderAccordion = ({summary, details, go}) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>{summary}</AccordionSummary>
            <AccordionDetails>
                <div>
                    {details.map((data, index) => {
                        const objKey = Object.keys(data)[0]
                        const objVal = data[Object.keys(data)[0]]
                        return <ListItemText key={index}>{`${objKey}: ${objVal}`}</ListItemText>
                    }) }
                    <IconButton onClick={() => go(`${summary.toLowerCase()}`)} color="primary" component="span"><EditIcon /></IconButton>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default Contact