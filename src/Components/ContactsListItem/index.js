import MyImage from '../../images/logo.jpg';
import {
    ActionWrapper,
    CancelButton, CloseButton,
    ContactInfo,
    ContactsEditWrapper,
    ContactsListImage,
    ContactsListStyles,
    Container,
    ContainerWrapper,
    EditButton,
    EditInputs,
    NameInput,
    PositionInput,
    SaveButton
} from "./styles";
import React, {useState} from 'react';
import {useMyContext} from "../../Contexts/context";
function ContactsListItem({item}) {
    const {data, setPageContext, selectedElement, setDataContext} = useMyContext();
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState("");
    const handleOpen = (e) => {
        e.stopPropagation();
        setPageContext(item);
    };
    const handleEdit = () => {
        setIsOpen(true);
    };
    const handleCancel = () => {
        setIsOpen(false);
    };
    const handleNameChange = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
    };
    const handlePositionChange = (event) => {
        event.preventDefault();
        setPosition(event.target.value);
    };
    const handleOnSave = (id) => {
        if (title || position) {
            setLoading(true);
            const foundedItem = data.find((obj) => {
                return (obj.id === id);
            })
            if (title) {
                foundedItem.title = title;
            }
            if (position) {
                foundedItem.position = position;
            }
            setPageContext(foundedItem);
            setLoading(false);
            handleCancel();
        }
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        const filteredItems = data.filter(item => item.id !== id);
        setDataContext(filteredItems);
    };

    return (<ContactsListStyles onClick={(e) => handleOpen(e)} selected={selectedElement}>
        {isOpen && (<EditInputs>
            <NameInput placeholder="Name" type="text" onChange={handleNameChange} value={title}/>
            <PositionInput placeholder="Position" type="text" onChange={handlePositionChange} value={position}/>
            <ActionWrapper>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                <SaveButton disabled={loading} onClick={() => handleOnSave(item.id)}>Save</SaveButton>
            </ActionWrapper>
        </EditInputs>)}
        <ContactsListImage src={MyImage} alt="img"/>
        <Container>
            <ContainerWrapper>
                <span>{item.title}</span>
                <CloseButton onClick={(e) => handleDelete(e, item.id)}>X</CloseButton>
            </ContainerWrapper>
            <ContactsEditWrapper>
                <ContactInfo>{item.position}</ContactInfo>
                <EditButton onClick={handleEdit}>Edit</EditButton>
            </ContactsEditWrapper>
        </Container>
    </ContactsListStyles>);
}

export default ContactsListItem;