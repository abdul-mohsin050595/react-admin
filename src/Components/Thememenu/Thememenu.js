import React from 'react';
import "./thememenu.css"
import { color_settings, mode_settings } from "../../Assets/Data/themeData";
import { AiOutlineClose } from "react-icons/ai"
import { useThemeContext } from '../Context/ThemeContext';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from "react-redux"
import { setTheme, setColor } from "../../Redux/Actions/themeAction"

function Thememenu() {
    const { themeRef, closeThemeMenu } = useThemeContext();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const changeThemeMode = (item) => {
        dispatch(setTheme(item.class))
    };

    const changeThemeColor = (item) => {
        dispatch(setColor(item.class))
    };

    return (
        <aside>
            <div className="theme-menu" ref={themeRef}>
                <h4>Theme settings</h4>
                <div className="theme-menu_close" onClick={closeThemeMenu}>
                    <IconContext.Provider value={{ className: "icons" }}>
                        <div className="menu_icon" title="Open menu">
                            <AiOutlineClose />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="theme-menu__select">
                    <span>Choose mode</span>
                    <ul className="mode-list">
                        {
                            mode_settings.map((item, index) => (
                                <li key={index} onClick={() => changeThemeMode(item)}>
                                    <div
                                        className={
                                            `mode-list__color 
                                        ${item.background} 
                                        ${item.id === theme.mode ? "active" : ""}
                                        `}
                                    >

                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>Choose color</span>
                    <ul className="mode-list">
                        {
                            color_settings.map((item, index) => (
                                <li key={index} onClick={() => changeThemeColor(item)}>
                                    <div className={`mode-list__color ${item.background}`}>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Thememenu