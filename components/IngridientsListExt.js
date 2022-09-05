import clsx from "clsx";
import recipes from "../data/recipes.json";

const IngridientsListExt = () => {
    const recipeId=sessionStorage.getItem("recipeId");
    const ingridients = Object.entries(recipes[0].recipesList[recipeId || 0].ingredients_ext);

    const test = ingridients.map(item=>item[1])

    return(

        <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Product</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">ghg</div>
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                            {test.map(i=>Object.entries(i)[0]).map((item, index) => {
                                return (
                                <tr key={index}>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src={item[1][0].url}  width="40" height="40" alt="Alex Shatov"/></div>
                                        <div class="font-medium text-gray-400">{item[0]}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{item[1][0].ghg}  ghg</div>
                                </td>
                                
                            </tr>)
                            })}
                          
                        </tbody>
                    </table>
    )
  
  }
  
  
  export default IngridientsListExt;


  