export interface Menu {
    recipeId: number;
    name: string;
    requestedFrom: string;
    date: Date;
    accepted: boolean;
}

export interface Recipe {
    recipeID: number;
    recipeName: string;
    preparation: string;
    rating: number;
    category: string;
}