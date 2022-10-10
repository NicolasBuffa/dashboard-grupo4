import SideBar from "./components/SideBar/SideBar";
import MainArea from "./components/MainArea/MainArea";
import { ThemeContext } from './context/ThemeContext';
import { useContext } from "react";

function App() {

  const { theme }= useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
      {/* <ThemeProvider> */}
      <SideBar />
      <MainArea />      
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
