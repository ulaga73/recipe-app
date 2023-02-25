import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/new" element={<AddRecipe/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
