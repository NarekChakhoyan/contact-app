import {ContactSearchInput, ContactSearchStyles, ContactSearchText} from "./styles";

function Index() {
    return (
        <ContactSearchStyles>
            <ContactSearchText><span>Contact Search</span></ContactSearchText>
            <ContactSearchInput type="search" />
        </ContactSearchStyles>
    );
}

export default Index;