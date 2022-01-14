import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
    const { strCategory } = useParams();
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getFilteredCategory(strCategory).then((data) => setMeals(data.meals));
    }, [strCategory]);
    const navigate = useNavigate();

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
