import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { getUser, getUserById } from "../store/store";
    
const cookies = new Cookies();

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        fullname: "",
        username:"",
        password: "",
        address: "",
        phone: "",
        avatar: "",
        id: "",
        role: ""
    });
    const [username, setUsername] = useState();

    useEffect(() => {

        handleFetchData();

    }, [])


    const handleFetchData = async() => {
        const {data} = await getUser();
        const fetchUser = data?.data;
        setUsername(fetchUser.username);
        setUser(fetchUser);
    }
    

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const handleAuthentication = async(token) => {
        localStorage.setItem("token", JSON.stringify(token));
        handleFetchData();
    }

    const updateUserContext = (newUser) => {
        setUser(newUser);
    }

    


    return (
        <UserContext.Provider
            value={{
                user,
                username,
                setUser,
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