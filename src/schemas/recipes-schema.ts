import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category:z.string()
})

export const DrinkAPIResponse = z.object({
    idDrink: z.string().optional(),
    strDrink: z.string().optional(),
    strDrinkThumb: z.string().optional()
})
export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse).optional(), // Opcional, puede estar ausente o ser un array vacío
})

