import React from "react";
import "./sidebar.css"
import { sidebars } from "../../Assets/Data/sidebar_routes"
import { NavLink } from "react-router-dom"
import { useSidebarContext } from "../Context/SidebarContext"

const Sidebar = () => {
    const { isSidebarOpen } = useSidebarContext();

    const classname = isSidebarOpen ? "sidebar_name" : "hide_sidebar_name";
    const activeLink = ({ isActive }) => {
        return {
            borderLeft: isActive ? "3px solid var(--txt-color)" : "",
            fontWeight: isActive ? "bold" : "",
            background: isActive ?"var(--second-color)" : "",
            color: isActive ? "var(--txt-white)" : "",
        }
    }
    return (
        <aside className={`${isSidebarOpen ? "sidebar_wrapper expand" : "sidebar_wrapper reduce"}`} >
            <ul className="sidebar">
                {
                    sidebars.map((sidebar, idx) => {
                        return (
                            <li key={idx} className="sidebar_item ">
                                <NavLink
                                    to={sidebar.route}
                                    className="sidebar_link"
                                    style={activeLink}

                                >
                                    <span className="sidebar_icon">{sidebar.icon}</span>
                                    <span
                                        className={classname}
                                    >
                                        {sidebar.name}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default Sidebar