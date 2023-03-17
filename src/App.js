
import Layout from "./Components/Layout/Layout";
import { SidebarProvider } from "./Components/Context/SidebarContext";
import { ThemeProvider } from "./Components/Context/ThemeContext";
function App() {
  
  return (
    <SidebarProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </SidebarProvider>
  );
}

export default App;
