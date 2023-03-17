import "./navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoIosColorPalette } from "react-icons/io"
import { IconContext } from "react-icons";
import { useSidebarContext } from "../Context/SidebarContext";
import { useThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
    const { toggleSidebar } = useSidebarContext()
    const {openThemeMenu} = useThemeContext()
    return (
        <header className="navbar_wrapper">
            <div className="navbar_menu_icon" onClick={toggleSidebar} >
                <IconContext.Provider value={{ className: "icons" }}>
                    <div className="menu_icon" title="Open menu">
                        <GiHamburgerMenu />
                    </div>
                </IconContext.Provider>
            </div>
            <div className="navbar_logo">
                my logo
            </div>
            <div className="navbar_profile">
                profile
            </div>
            <div className="navbar_theme_icon" onClick={openThemeMenu}>
                <IconContext.Provider value={{ className: "icons" }} >
                <div className="menu_icon" title="Open Theme">
                    <IoIosColorPalette />
                </div>
                </IconContext.Provider>
            </div>
        </header>
    )
}

export default Navbar