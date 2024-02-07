import MyImage from '../../images/logo.jpg';
import {
    ContactInfo, ContactsEditWrapper,
    ContactsListImage,
    ContactsListStyles,
    Container,
    ContainerWrapper, EditButton,
    ExitButton
} from "./styles";

function ContactsListItem({ title,contactInfo }) {
    const handleOpen = () =>{
        console.log("sscs")
    };

    return (
        <ContactsListStyles onClick={handleOpen}>
            <ContactsListImage src={MyImage} alt="img"/>
            <Container>
                <ContainerWrapper>
                    <span>{title}</span>
                    <ExitButton>X</ExitButton>
                </ContainerWrapper>
                <ContactsEditWrapper>
                    <ContactInfo>{contactInfo}</ContactInfo>
                    <EditButton>Edit</EditButton>
                </ContactsEditWrapper>
            </Container>
        </ContactsListStyles>
    );
}

export default ContactsListItem;