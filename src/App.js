import './App.css';
import ContactsDirectory from "./Components/ContactsDirectory";
import ContactInfo from "./Components/ContactsInfo";
import {MyContext} from "./Contexts/context";
import {useEffect, useMemo, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const [element, setElement] = useState({});

    const contextValue = useMemo(() => ({
        data, element, setElement,
    }), [data, element])

    useEffect(() => {
        setData( [{
            title: 'Hopar',
            imageSrc: '',
            contactInfo: 'ceo',
            CallOffice: "781-000-0005",
            CallMobile: "617-000-0005",
            SMS: "781-000-0005",
            Email: "rmoore@fakemail.com",
            id: 1
        }, {
            title: 'Morqur',
            imageSrc: '',
            contactInfo: 'bank',
            CallOffice: "781-000-0001",
            CallMobile: "617-000-0001",
            SMS: "781-000-0001",
            Email: "rmoore@fakemail.com",
            id: 2
        }, {
            title: 'Qeri',
            imageSrc: '',
            contactInfo: 'shenq',
            CallOffice: "781-000-0002",
            CallMobile: "617-000-0002",
            SMS: "781-000-0002",
            Email: "rmoore@fakemail.com",
            id: 3
        }]);
    }, []);

    return (<MyContext.Provider value={contextValue}>
        <div className="App">
            <ContactsDirectory/>
            <ContactInfo/>
        </div>
    </MyContext.Provider>);
}

export default App;
