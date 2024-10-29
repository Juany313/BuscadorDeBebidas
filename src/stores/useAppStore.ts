import { create } from 'zustand'
import {devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'

//al pasar como parametro ...a le estoy pasando una copia de todos los argumentos, es decir, las funciones  set, get y api
export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))