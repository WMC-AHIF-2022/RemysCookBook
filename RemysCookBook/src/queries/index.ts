import axios from "axios";

export const fetchExamples = () => axios.get("/api/example");
export const fetchRequestedRecipes = () => axios.get("/api/requestedRecipes");
export const fetchRecipes = () => axios.get("/api/getRecipes");
