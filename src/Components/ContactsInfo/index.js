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
    const { element } = useMyContext();

    return (<ContactInfoStyles>
        <ContactInfoText><span>Employee</span></ContactInfoText>
        <ContactInfoConteiner>
            <div>
                <ContactInfoFirstDiv>
                    <ContactInfoImage src={MyImage} alt="img"/>
                    <div>
                        <p>{element.title}</p>
                        <h4>{element.contactInfo}</h4>
                    </div>
                </ContactInfoFirstDiv>
            </div>
            <ContactInfoSecondDiv>
                <p>CallOffice</p>
                <h5>{element.CallOffice}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Call Mobile</p>
                <h5>{element.CallMobile}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>SMS</p>
                <h5>{element.SMS}</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Email</p>
                <h5>{element.Email}</h5>
            </ContactInfoSecondDiv>
        </ContactInfoConteiner>
    </ContactInfoStyles>);
}

export default ContactInfo;