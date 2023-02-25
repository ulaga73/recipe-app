import "./AddRecipe.css";

const AddRecipe = () => {
    return(
        <div className="form-container">
            <h1>Create a recipe</h1>
            <form>
                <div>
                    <label>Recipe title</label><br/>
                    <input type={"text"} />
                </div>
                <div>
                    <label>Author</label><br/>
                    <input type={"text"} />
                </div>
                <div>
                    <label>Please paste image url</label><br/>
                    <input type={"url"} />
                </div>
                <div>
                    <label>Ingredients</label><br/>
                    <textarea/>
                </div>
                <div>
                    <label>Recipe directions</label><br/>
                    <textarea/>
                </div>
            </form>
        </div>
    )
}

export default AddRecipe;