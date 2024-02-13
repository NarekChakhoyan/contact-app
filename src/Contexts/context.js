import {createContext, useContext} from 'react';

export const MyContext = createContext({
    data: [],
    element: {},
    setElement: () => {},
});

export const useMyContext = () => useContext(MyContext);