import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';
    
const cookies = new Cookies();

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(cookies.get("user"));
    }, [])
    

    const handleLogout = () => {
        cookies.remove("user");
        setUser(null);
    }

    const handleAuthentication = (newUser) => {
        cookies.set("user", newUser);
        setUser(newUser);
    }

    const updateUserContext = (newUser) => {
        setUser(newUser);
        cookies.set("user", newUser);
    }


    return (
        <UserContext.Provider
            value={{
                user,
                handleLogout,
                handleAuthentication,
                updateUserContext
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);