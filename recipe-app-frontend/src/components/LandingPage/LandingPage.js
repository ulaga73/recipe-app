import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    const [apiData, setApiData] = useState(null);
    const navigate = useNavigate();
    console.log(apiData);
    useEffect(() => {
        fetch("https://recipe-app-pxdf.onrender.com/api/recipe").then(res => res.json()).then((data) => {
            if(data.status){
                setApiData(data.result);
            }
        })
    }, [])
    return(
        <div className="home-container">
            <div className="logo-contain" onClick={() => navigate("/home")}>
                <span className="logo">Logo</span>
                <span className="recipe-app">Recipe App</span>
            </div>
            <div className="search-bar">
                <input type={"search"} /> <br/>
                <button onClick={() => navigate("/new")}>New</button>
            </div>
            <h3>All Recipes</h3>
            <div className="image-data">
                {
                    apiData && 
                    apiData.map((data, index) => {
                        return(
                            <div key={index} className="image-items">
                                <img src={data.image.url} alt={data.title} width={300} height={500}/>
                                <p>{data.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LandingPage;