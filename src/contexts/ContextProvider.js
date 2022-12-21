import React, {createContext, useContext, useState} from "react";

const StateContext = createContext()

// inicializamos los diferentes estados de la aplicación 
const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked] : true})
    }
    return (
        <StateContext.Provider  value = {{ 
            activeMenu: activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick
            }}>
           {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

