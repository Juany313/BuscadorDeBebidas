import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drinks, Recipe, SearchFilter } from "../types"



export type RecipesSliceType ={
    categories: Categories
    drinks: Drinks[] | []
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id : Drinks['idDrink'])=> Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: [],
    modal: false,
    selectedRecipe: {} as Recipe,
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
        
    },
    selectRecipe: async (id)=> {
       const selectedRecipe = await getRecipeById(id)
    
       set({
        selectedRecipe,
        modal: true
        })
    },
    closeModal: ()=> {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
            })
    }
})