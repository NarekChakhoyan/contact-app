import MyImage from '../../images/logo.jpg';
import {
    ContactInfo,
    ContactsEditWrapper,
    ContactsListImage,
    ContactsListStyles,
    Container,
    ContainerWrapper,
    EditButton,
    ExitButton
} from "./styles";
import React from 'react';
import {useMyContext} from "../../Contexts/context";


function ContactsListItem({item}) {
    const {setElement} = useMyContext();

    const handleOpen = () => {
        setElement(item);
    };

    return (
        <ContactsListStyles onClick={handleOpen}>
            <ContactsListImage src={MyImage} alt="img"/>
            <Container>
                <ContainerWrapper>
                    <span>{item.title}</span>
                    <ExitButton>X</ExitButton>
                </ContainerWrapper>
                <ContactsEditWrapper>
                    <ContactInfo>{item.contactInfo}</ContactInfo>
                    <EditButton>Edit</EditButton>
                </ContactsEditWrapper>
            </Container>
        </ContactsListStyles>
    );
}

export default ContactsListItem;