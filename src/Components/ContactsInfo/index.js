import MyImage from "../../images/logo.jpg";
import {
    ContactInfoConteiner,
    ContactInfoFirstDiv,
    ContactInfoImage, ContactInfoSecondDiv,
    ContactInfoStyles,
    ContactInfoText
} from "./styles";
import {useMyContext} from "../../Contexts/context";

function ContactInfo() {
    const { selectedElement } = useMyContext();

    return (<ContactInfoStyles>
        <ContactInfoText><span>Employee</span></ContactInfoText>
        <ContactInfoConteiner>
            <div>
                <ContactInfoFirstDiv>
                    <ContactInfoImage src={MyImage} alt="img"/>
                    <div>
                        <p>{selectedElement.title}</p>
                        <h4>{selectedElement.position}</h4>
                    </div>
                </ContactInfoFirstDiv>
            </div>
            <ContactInfoSecondDiv>
                <p>CallOffice</p>
                <h5>{selectedElement.CallOffice}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Call Mobile</p>
                <h5>{selectedElement.CallMobile}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>SMS</p>
                <h5>{selectedElement.SMS}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Email</p>
                <h5>{selectedElement.Email}</h5>
            </ContactInfoSecondDiv>
        </ContactInfoConteiner>
    </ContactInfoStyles>);
}

export default ContactInfo;