import { cardGrid, cardItem } from '../node_modules/card-grid/dist-web/index.js';
import recipes from "./data/recipes.json"
import { useRouter } from "next/router";

function Recipes() {

    const router=useRouter();

const hadleClick=(id)=>{
    sessionStorage.setItem("recipeId",id-1);
    router.push(`/footprint`)
}

  return (
    <div className="flex">

  
  {recipes[0].recipesList.map((item) => {
   
return(<div tabindex="0" class="focus:outline-none">
<div class="mx-auto container py-8">
    <div class="flex flex-wrap items-center lg:justify-between justify-center">
        <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
            <div>
                <img alt={item.name} src={item.imageUrl} tabindex="0" class="focus:outline-none w-full " />
            </div>
            <div class="bg-white">
                <div class="flex items-center justify-between px-4 pt-4">
                <div class="flex mt-4">
                        <div>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">30 min</p>
                        </div>
                        <div class="pl-2">
                        <button className="ease-in-out duration-300 outline-0 border-0" onClick={()=>hadleClick(item.id)}>    <p tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-green-300 py-1">{item.taxonomy[1].ghg_int} kg co2e</p></button>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex items-center">
                        <h2 tabindex="0" class="focus:outline-none text-lg font-semibold text-black">{item.name}</h2>
                    </div>
               
                    <div class="flex items-center justify-between py-4">
                    <button type="submit" class="ml-auto inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        <div>Lägg till</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    </div>
  
</div>
</div>)



       



            })}


    </div>
  );
}

export default Recipes;