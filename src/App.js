import React, { useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import { SidebarProvider } from "./Components/Context/SidebarContext";
import { ThemeProvider } from "./Components/Context/ThemeContext";

const spinner = document.getElementById('spinner');

const showLoader = () => spinner.classList.remove("spinner");
const addClass = () => spinner.classList.add("loader-hide");
function App() {


  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (
    <SidebarProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </SidebarProvider>
  );
}

export default App;
