import React,{createContext, useState} from 'react';
export const SignInContext = createContext();
const SignIn = ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <SignInContext.Provider value={{open, setOpen}}>
            {children}
        </SignInContext.Provider>
    );
};

export default SignIn;