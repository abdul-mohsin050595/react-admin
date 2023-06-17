import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "../Allroutes";
import "./layout.css";
import Thememenu from "../Thememenu/Thememenu";
import { useSelector } from "react-redux";
import { useSidebarContext } from "../Context/SidebarContext";

function Layout() {
  const theme = useSelector((state) => state.theme);
  const { isSidebarOpen } = useSidebarContext();
  return (
    <BrowserRouter>
      <div className={`layout ${theme.mode} ${theme.color}`}>
        <Navbar />
        <div className="layout_content">
          <Sidebar />
          <Thememenu />
          <main
            className={`${
              isSidebarOpen
                ? "expand_layout layout_content_main"
                : "reduce_layout layout_content_main"
            }`}
          >
            <Allroutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
