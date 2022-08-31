import clsx from "clsx";
import MealCard from "./MealCard";
import recipes from "../data/recipes.json"

const TaxonomyInt = () => {
    const recipeId = sessionStorage.getItem("recipeId");
    const taxonomy = Object.entries(recipes[0].recipesList[recipeId].taxonomy);

    const test = taxonomy.map(item=>item[1])
    return(
        <ul
          className=""
          
        >
      
                       
                <li >
                     ghg_int -  {taxonomy.ghg_int}  ghg
                </li>
        </ul>
    )
  
  }
  
  
  export default TaxonomyInt;
