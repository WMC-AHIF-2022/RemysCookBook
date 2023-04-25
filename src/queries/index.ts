import axios from "axios";

export const fetchExamples = () => axios.get("/api/example");