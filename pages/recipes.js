// import MealCardsGrid from './components/MealCardsGrid';
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
    <div className="App">
   {/* <MealCardsGrid/> */}

   {/* <card-grid > */}
  
  {recipes[0].recipesList.map((item) => {
                return(
                     <div className='flex'>
                    <div className='w-50'>
                        <div className=" flex-col">
                            <img src={item.imageUrl} alt={item.name} width="200"/>
                            <span className="block m-10">{item.name}</span>
                        </div>
                        </div>
                        <button className="hover:cursor-pointer" onClick={()=>hadleClick(item.id)}>
                            {/* <a href="/footprint">{item.taxonomy[1].co2}</a> */}
                            {item.taxonomy[1].ghg_int}
                        </button>
                    </div>

                )
            })}

{/* </card-grid> */}

    </div>
  );
}

export default Recipes;