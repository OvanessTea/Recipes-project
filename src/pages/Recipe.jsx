import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
    }, [idMeal]);

    return (
        <>
            {!idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    <p>
                        Instruction: <br />
                        {recipe.strInstructions}
                    </p>
                    <hr />
                    {recipe.strYoutube && (
                        <div className="row">
                            <h5>Video recipe</h5>
                            <iframe
                                title={idMeal}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowfullscreen
                            />
                        </div>
                    )}
                </div>
            )}
            <button className="btn" onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    );
}
export { Recipe };
