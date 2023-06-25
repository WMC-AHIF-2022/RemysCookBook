export interface Menu {
    recipeID: number;
    recipeName: string;
    requestedFrom: string;
    date: string;
    accepted: string;
}

export interface Recipe {
    recipeID: number;
    recipeName: string;
    preparation: string;
    rating: number;
    category: string;
}

export interface Ingredient {
    ingredientID: number;
    recipeID: number;
    ingredientName: string;
    amount: number;
    unit: string;
}
