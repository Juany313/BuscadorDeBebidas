import { create } from 'zustand'
import {devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { FavoritesSliceType, createFavoritesSlice,  } from './favoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'

//al pasar como parametro ...a le estoy pasando una copia de todos los argumentos, es decir, las funciones  set, get y api
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})))