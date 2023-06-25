export interface Recipe {
    recipeID: number;
    recipeName: string;
    preparation: string;
    rating: number;
    category: string;
    weekId: number;
    recipeDate: string;
}

export interface Ingredients {
    ingredientID: number;
    recipeID: number;
    ingredientName: string;
    amount: number;
    unit: string;
}