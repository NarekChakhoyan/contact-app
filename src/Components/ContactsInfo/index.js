import MyImage from "../../images/logo.jpg";
import {
    ContactInfoConteiner,
    ContactInfoFirstDiv,
    ContactInfoImage, ContactInfoSecondDiv,
    ContactInfoStyles,
    ContactInfoText
} from "./styles";

function ContactInfo() {
    return (<ContactInfoStyles>
        <ContactInfoText><span>Employee</span></ContactInfoText>
        <ContactInfoConteiner>
            <div>
                <ContactInfoFirstDiv>
                    <ContactInfoImage src={MyImage} alt="img"/>
                    <div>
                        <p>Hopar</p>
                        <h4>Han</h4>
                    </div>
                </ContactInfoFirstDiv>
            </div>
            <ContactInfoSecondDiv>
                <p>Call Office</p>
                <h5>781-000-0005</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Call Mobile</p>
                <h5>617-000-0005</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>SMS</p>
                <h5>781-000-0005</h5>
            </ContactInfoSecondDiv>
            <ContactInfoSecondDiv>
                <p>Email</p>
                <h5>rmoore@fakemail.com</h5>
            </ContactInfoSecondDiv>
        </ContactInfoConteiner>
    </ContactInfoStyles>);
}

export default ContactInfo;