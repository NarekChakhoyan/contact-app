import ContactSearch from "../ContactSearch";
import ContactsList from "../ContactsList";
import {ContactsDirectoryStyles} from "./styles";

function ContactsDirectory() {
    return (
        <ContactsDirectoryStyles>
            <ContactSearch />
            <ContactsList />
        </ContactsDirectoryStyles>
    );
}

export default ContactsDirectory;
