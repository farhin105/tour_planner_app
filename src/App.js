import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/login";
import Home from "./components/home";
import UserToken from "./userToken";


function App() {
  const { token, setToken } = UserToken();

  return (
    <div className="App">
      <Routes>
        {!token ? <Route path="/" exact element={<Login setToken={setToken} />} />
          : <Route path="/" exact element={<Home/>} />}
      </Routes>
    </div>
  );
  
}

export default App;
