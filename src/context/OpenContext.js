import React,{createContext, useState} from 'react';
export const SidebarContext = createContext();
const OpenContext = ({children}) => {
    const [state, setState] = useState({left: false});
    return (
        <SidebarContext.Provider value={{state, setState}}>
            {children}
        </SidebarContext.Provider>
    );
};

export default OpenContext;