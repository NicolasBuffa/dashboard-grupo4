import SideBar from "./components/SideBar/SideBar";
import MainArea from "./components/MainArea/MainArea";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        {/* <ThemeProvider> */}
        <SideBar />
        <MainArea />
        {/* </ThemeProvider> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
