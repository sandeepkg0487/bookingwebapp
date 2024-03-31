import { createContext, useContext, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import api from "../Services/api";

const HotelAuthcontext = createContext()

export const HotelAuthcontextprovider = ({ children }) => {

    const navigate = useNavigate()
    // const [ isAuth,setIsAuth ] = useState(false);
    const [cookies, setCookies, removeCookie] = useCookies()




    // login fn
    const login = async (userName, password) => {
        console.log(userName, password ,"sername password") ;
        try {
            const response = await api.post('/hotel/login', {
                 userName,
                 password
            })

            setCookies('refreshToken', response.data.refreshToken);
            setCookies('accessToken', response.data.accessToken);
            setCookies('isAuth', true);
            setCookies('role', 'Hotel')

            navigate('/')
            return true

        } catch (error) {
            console.log(error);
        }
        return false
    }





    // logutfunction

    const logout = () => {

        removeCookie('refreshToken')
        removeCookie('accessToken')
        removeCookie('isAuth')
        removeCookie('role')
        // navigate('/login')
    }

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout,
            

        }), [cookies]
    )

    return (<HotelAuthcontext.Provider value={value}>{children}</HotelAuthcontext.Provider>)


}

export const useHotelAuth = () => {
    return useContext(HotelAuthcontext)
}