import { API_URL } from "./config";

const getMealById = async (idMeal) => {
    const response = await fetch(API_URL + "lookup.php?i=" + idMeal);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + "categories.php");
    return await response.json();
};

const getFilteredCategory = async (category) => {
    const response = await fetch(API_URL + "filter.php?c=" + category);
    return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
