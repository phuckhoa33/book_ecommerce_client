import { createContext, useContext, useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import { getUser, resetPassword, updateUser } from "../store/store";

const UserContext = createContext();

const initalUser = {
    fullname: undefined,
    username:undefined,
    password: undefined,
    address: undefined,
    phone: undefined,
    avatar: undefined,
    id: undefined,
    role: undefined
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initalUser);
    const [username, setUsername] = useState();
    const location = useLocation();

    useEffect(() => {
        if(!location.pathname.includes("reset-password")){
            handleFetchData();
        }
        
    }, [])


    const checkExistUser = () => {
        const {fullname, username, password, id, role} = user;
        return fullname && username && password && id && role; 
    }


    const handleFetchData = async() => {
        const fetchUser = retrieveUserDataFromToken();
        setUsername(fetchUser?.username);
        setUser(fetchUser);
    }

    const retrieveUserDataFromToken = async() => {
        const {data} = await getUser();
        return data?.data;
    }
    

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const handleAuthentication = async(token) => {
        localStorage.setItem("token", JSON.stringify(token));
        handleFetchData();
    }

    const updateUserFunction = async(updateType, updateUser) => {
        let result = undefined;
        if(updateType==="reset_password"){
            result = await resetPassword(updateUser);
        }
        else {
            // result = await updateUser(user);
            // localStorage.setItem("token", JSON.stringify(data?.data?.token));
        }

        console.log(result);
    }

    


    return (
        <UserContext.Provider
            value={{
                user,
                username,
                setUser,
                retrieveUserDataFromToken,
                checkExistUser,
                handleFetchData,
                handleLogout,
                handleAuthentication,
                updateUserFunction
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);