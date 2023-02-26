import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/");
    }
    return(
        <div className="navbar-container">
            <div className="logo-contain" onClick={() => navigate("/home")}>
                <span className="logo">Logo</span>
                <span className="recipe-app">Recipe App</span>
            </div>
            <div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default NavBar;