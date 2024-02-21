import './App.css';
import ContactsDirectory from "./Components/ContactsDirectory";
import ContactInfo from "./Components/ContactsInfo";
import {MyContext} from "./Contexts/context";
import {useCallback, useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    const [selectedElement, setSelectedElement] = useState({});

    const setPageContext = useCallback(
        (newState) => {
            setSelectedElement( {...selectedElement, ...newState})
        },
        [selectedElement, setSelectedElement],
    )

    const setDataContext = useCallback(
        (newState) => {
            setData(newState)
        },
        [setData],
    )

    const getContextValue = useCallback(
        () => ({data, setPageContext, selectedElement, setDataContext}),
        [data, selectedElement, setPageContext, setDataContext],
    )

    useEffect(() => {
        setData( [{
            title: 'Jack',
            imageSrc: '',
            position: 'ceo',
            CallOffice: "781-000-0005",
            CallMobile: "617-000-0005",
            SMS: "781-000-0005",
            Email: "rmoore@fakemail.com",
            id: 1
        }, {
            title: 'Mark',
            imageSrc: '',
            position: 'manager',
            CallOffice: "781-000-0001",
            CallMobile: "617-000-0001",
            SMS: "781-000-0001",
            Email: "rmoore@fakemail.com",
            id: 2
        }, {
            title: 'Zack',
            imageSrc: '',
            position: 'programmer',
            CallOffice: "781-000-0002",
            CallMobile: "617-000-0002",
            SMS: "781-000-0002",
            Email: "rmoore@fakemail.com",
            id: 3
        }]);
    }, []);

    return (<MyContext.Provider value={getContextValue()}>
        <div className="App">
            <ContactsDirectory/>
            <ContactInfo/>
        </div>
    </MyContext.Provider>);
}

export default App;
