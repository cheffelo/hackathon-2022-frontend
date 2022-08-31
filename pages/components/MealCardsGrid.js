import clsx from "clsx";
import MealCard from "./MealCard";
import recipes from "../data/recipes.json"

const MealCardsGrid = () => {
    console.log(recipes)
    return(
        <div
          className={clsx(
            "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:gap-5 xl:grid-cols-5",
          )}
          
        >
            {recipes[0].recipesList.map((item) => {
                return(
                    <MealCard key={item.id} name={item.name} image={item.imageUrl}/>
                )
            })}
        </div>
    )
  
  }
  
  
  export default MealCardsGrid;
