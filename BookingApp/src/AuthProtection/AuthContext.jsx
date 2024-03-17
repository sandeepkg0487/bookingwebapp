import { createContext, useContext, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import api from "../Services/api";

const AuthContext = createContext()

export const AuthContextprovider = ({ children }) => {

    const navigate = useNavigate()
    // const [ isAuth,setIsAuth ] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies()

    console.log('to check weather working');


    // login fn
    const login = async (email, password) => {

        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            })

            setCookies('token', response.data.token);
            setCookies('isAuth', true);

            return true

        } catch (error) {
            console.log(error);
        }
        return false
    }



    // signup function
    const signup = async (firstname, lastname, email, password,phone) => {
        console.log("data receive from signpu",firstname, lastname.email, password);
        try {
            const response = await api.post('/signup', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
                phone:phone,
            })
            console.log("response", response.data);
            setCookies('token', response.data.token);
            setCookies('isAuth', true);

            return true

        } catch (error) {
            console.log(error);
        }
        return false
    }

    // logutfunction

    const logout = () => {
        removeCookie('token')
        navigate('/login')
    }

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout,
            signup,

        }), [cookies]
    )

    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)


}

export const useAuth = () => {
    return useContext(AuthContext)
}