import type { Drinks } from "../types"

type DrinkCardProps = {
    drink: Drinks
}

const DrinkCard = ({drink} : DrinkCardProps) => {
  
  return (
    <div className="border shadow-lg">
        <div className="overflow-hidden">
          <img 
            src={drink.strDrinkThumb} 
            alt={`Imagen de ${drink.strDrinkThumb}`} 
            className="hover:scale-90 transition-transform "
          />
        </div>
        
        <div className="p-5">
          <h2 className="text-2xl trumcate font-black ">{drink.strDrink}</h2>
          <button
            type="button"
            className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
          >
            Ver Receta
          </button>
        </div>
    </div>
  )
}

export default DrinkCard