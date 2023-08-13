import {Context, ReactNode} from "react";
import {createContext, useContext, useState} from "react";
import {ILogin, IAuthProvider} from "../types/authTypes";


interface IProps {
    children: ReactNode
}



const Auth: Context<IAuthProvider | null> = createContext(null)

export const useAuth = () => useContext(Auth);


export function AuthProvider({children}: IProps) {
    const [user, setUser] = useState<ILogin | null>(() => JSON.parse(localStorage.getItem('user')) ?? null);


    function signIn(newUser: ILogin, callBack: () => void) {
        setUser(newUser)
        console.log(newUser)


        localStorage.setItem('user', JSON.stringify(newUser));
        callBack()
    }

    function signOut(callBack: () => void) {
        setUser(null)
        callBack()
        localStorage.removeItem('user')
    }


    const currentUser: IAuthProvider = {
        user,
        signIn,
        signOut
    }


    return (
        <Auth.Provider value={currentUser}>
            {children}
        </Auth.Provider>
    )

}