import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import { Categories, Drinks, SearchFilter } from "../types"



export type RecipesSliceType ={
    categories: Categories
    drinks: Drinks[] | []
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: [],
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters)=> {
        const result = await getRecipes(filters)
        const drinks = result?.drinks
        set({
            drinks
        })
        
    }
})