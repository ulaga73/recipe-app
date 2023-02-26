import { useState } from "react";
import "./AddRecipe.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const AddRecipe = () => {
    const [data, setData] = useState({title: "", author: "", image: "", ingredients: "", directions: ""});
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        // console.log(data);
        if(data.title && data.author && data.image && data.ingredients && data.directions){
            const {title, author, image, ingredients, directions} = data;
            fetch("http://localhost:8080/api/recipe", {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, author, image, ingredients, directions})
            }).then(res => res.json()).then((res) => {
                if(res.status){
                    navigate("/home");
                }
            })
        }
    }
    return(
        <>
        <NavBar/>
        <div className="form-container">
            <h1>Create a recipe</h1>
            <form>
                <div>
                    <label htmlFor="title">Recipe title</label><br/>
                    <input type={"text"} value={data.title} id="title" onChange={(e) => setData({...data, title: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="author">Author</label><br/>
                    <input type={"text"} value={data.author} id="author" onChange={(e) => setData({...data, author: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="image">Please paste image url</label><br/>
                    <input type={"url"} value={data.image} id="image" onChange={(e) => setData({...data, image: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label><br/>
                    <textarea id="ingredients" value={data.ingredients} onChange={(e) => setData({...data, ingredients: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="directions">Recipe directions</label><br/>
                    <textarea id="directions" value={data.directions} onChange={(e) => setData({...data, directions: e.target.value})}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default AddRecipe;