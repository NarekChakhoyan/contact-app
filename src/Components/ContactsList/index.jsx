import {useContext} from "react";
import ContactsListItem from "../ContactsListItem";
import {ContactsListStyles} from "./styles";
import {MyContext} from "../../Contexts/context";


function ContactsList() {
    const { data } = useContext(MyContext);

    return (<ContactsListStyles>
        {data?.length && data.map(item => <ContactsListItem key={item.id} item={item}/>)}
    </ContactsListStyles>);
}

export default ContactsList;