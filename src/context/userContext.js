import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { getUserById } from "../store/store";
    
const cookies = new Cookies();

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname:"",
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
        const {data} = await getUserById(null);
        const fetchUser = data.data;
        if(fetchUser.firstname && fetchUser.lastname){
            setUsername(fetchUser.firstname+""+fetchUser.lastname);
        }
        else {
            setUsername(fetchUser.email);
        }
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