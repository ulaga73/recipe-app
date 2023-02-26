import "./Login.css";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});
    const navigate = useNavigate();
    function handleSubmit(e){
        if(user.email && user.password){
            e.preventDefault();
            const {email, password} = user;
            console.log(user);
            fetch("https://recipe-app-pxdf.onrender.com/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            }).then(res => res.json()).then((data) => {
                if(data.status){
                    localStorage.setItem("token", data.token);
                    navigate("/home");
                }
            })
        }
    }
    return(
        <div className="login-container">
            <div className="flex-item">
                <h2>Sign In</h2>
            </div>
            <div className="flex-item">
                <form>
                    <div>
                        <label htmlFor="email">Email address</label><br/>
                        <input type="email" placeholder="Enter email" id="email" name="email" onChange={(e) => setUser({...user, email: e.target.value})} required value={user.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" placeholder="Enter password" id="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})} required minLength={6} maxLength={12} value={user.password}/>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                    <Link to={"/signup"}>
                        <button>Register</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;