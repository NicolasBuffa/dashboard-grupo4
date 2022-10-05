import AppRoutes from "./routes/AppRoutes";
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <AppRoutes>
        <Home/>
      </AppRoutes>
    </div>
  );
}

export default App;
