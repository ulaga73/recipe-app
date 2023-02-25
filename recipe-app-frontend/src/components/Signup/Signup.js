import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [user, setUser] = useState({email: "", password: "", cpassword: ""});
    const [error, setError] = useState("");
    const [apiData, setApiData] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        const {email, password, cpassword} = user;
        if(password !== cpassword){
            return setError("*The password and confirm password should be equal");
        }else{
            setError("");
            fetch("https://recipe-app-pxdf.onrender.com/api/user/signup",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            }).then(res => res.json()).then((data) => {
                if(data.status){
                    setApiData(data);
                    navigate("/home");
                }
            })
        }
    }
    return(
        <div className="signup-container">
            <div className="flex-item">
                <h2>SIGN UP</h2>
            </div>
            <div className="flex-item">
                <form>
                        <div>
                            <label htmlFor="email">Email address</label><br/>
                            <input type="email" placeholder="Enter email" id="email" name="email" onChange={(e) => setUser({...user, email: e.target.value})} required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" placeholder="Enter password" id="password" name="password" onChange={(e) => setUser({...user, password: e.target.value})} required minLength={6} maxLength={12}/>
                        </div><div>
                            <label htmlFor="cpassword">Confirm password</label><br/>
                            <input type="password" placeholder="Enter password" id="cpassword" name="cpassword" onChange={(e) => setUser({...user, cpassword: e.target.value})} required minLength={6} maxLength={12}/>
                        </div>
                        <button onClick={handleSubmit}>Submit</button>
                        <div>
                            {error ? <p>{error}</p>:null}
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Signup;