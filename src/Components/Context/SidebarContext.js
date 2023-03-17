import { createContext, useContext, useState } from "react"

const sidebarContext = createContext(null)

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <sidebarContext.Provider
        value={{toggleSidebar,isSidebarOpen}}
        >
            {children}
        </sidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(sidebarContext)
}