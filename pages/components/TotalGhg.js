import clsx from "clsx";
import recipes from "../../data/recipes.json"

export const TaxonomyInt = () => {
    const recipeId = sessionStorage.getItem("recipeId");
    const taxonomy = Object.entries(recipes[0].recipesList[recipeId].taxonomy[1]);
    return(
      
     <div className="flex justify-between w-full text-white border">
        <p>Total:</p>
                    <span> {taxonomy[0][1]}  ghg</span> 
                </div>
                       
               
    )
  
  }
  
  
  export const TaxonomyExt = () => {
    const recipeId = sessionStorage.getItem("recipeId");
    const taxonomy = Object.entries(recipes[0].recipesList[recipeId].taxonomy[2]);
    console.log(taxonomy)
    return(
      
     <div className="flex justify-between w-full text-white border">
        <p>Total:</p>
                   <span> {taxonomy[0][1]}  ghg</span>
                </div>
                
                       
               
    )
  
  }
