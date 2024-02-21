import {createContext, useContext} from 'react';

export const MyContext = createContext({
    data: [],
    selectedElement: null,
    setPageContext: () => {},
    setDataContext: () => {},
});

export const useMyContext = () => useContext(MyContext);