import { createContext, useContext, useRef } from "react"

const themeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const themeRef = useRef(null)

    const openThemeMenu = () => themeRef.current.classList.add('active')
        
    const closeThemeMenu = () => themeRef.current.classList.remove('active')

    return (
        <themeContext.Provider
            value={{ openThemeMenu, closeThemeMenu, themeRef }}
        >
            {children}
        </themeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(themeContext)
}