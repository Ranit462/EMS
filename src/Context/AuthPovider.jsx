import React, { useEffect, useState } from "react"
import { createContext } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/Localstorage"


export const AuthContext= createContext()



const AuthPovider=({children})=>{
    

    const [userData, setUserData]=useState(null)

    useEffect(()=>{
        const {employees}=getLocalStorage()
        setUserData(employees)
    },[])


    return(
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                 {children}
            </AuthContext.Provider>
           

        </div>
    )
}
export default AuthPovider