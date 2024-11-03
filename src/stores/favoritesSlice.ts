import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe :Recipe) => void
    favoriteExists: (id : Recipe['idDrink']) => boolean
    loadFromLocalStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & NotificationSliceType, [], [], 
FavoritesSliceType> = (set, get, api)=> ({
    favorites:[],
    handleClickFavorite: (recipe) => {
        
        if(get().favoriteExists(recipe.idDrink)){
            set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            })
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se eliminó de Favoritos', 
                error: false
            })
        } else {

            set({
                favorites: [...get().favorites, recipe]
            })
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se agregó a Favoritos', 
                error: false
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
        
    },
    favoriteExists: (id)=> {
        return (get().favorites.some(favorite => favorite.idDrink === id))
    } ,
    loadFromLocalStorage: ()=> {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})

//Slice Pattern