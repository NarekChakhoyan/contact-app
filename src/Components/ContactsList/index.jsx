import ContactsListItem from "../ContactsListItem";
import {ContactsListStyles} from "./styles";

const data = [{
    // mock data
    title: 'Hopar', imageSrc: '', contactInfo: 'ceo', id: 1
}, {
    title: 'Morqur', imageSrc: '', contactInfo: 'bank', id: 2
}, {
    title: 'Qeri', imageSrc: '', contactInfo: 'shenq', id: 3
}]

function ContactsList() {

    return (<ContactsListStyles>
            {data.map(item => <ContactsListItem key={item.id} {...item}/>)}
        </ContactsListStyles>);
}

export default ContactsList;