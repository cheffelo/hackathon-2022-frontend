import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IngridientsList from './components/IngridientsList';
import IngridientsListExt from './components/IngridientsListExt';
import {TaxonomyInt, TaxonomyExt} from './components/TotalGhg';
import { cardGrid, cardItem } from '../node_modules/card-grid/dist-web/index.js';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Header({ title }) {
    return <h2 style={{textAlign: "center"}} >{title ? title : 'Default title'}</h2>;
  }
  
  
  export default function FootPrint(props) {

    const router=useRouter();
    const recipeId=sessionStorage.getItem("recipeId");

    
    return (
      <>
      <div className="flex w-full bg-white">
          <h1 className="mx-auto text-red-800" > What's your diet's carbon footprint? </h1>
      </div>
  
  
      <div>
          <h2 style={{textAlign: "center"}}> Let's find out the impact of your choice from food to the environment </h2>
            <div className="flex justify-around">
                  
                  <div className={styles.cardgreen} class="card-title">
                    <h2>CO2</h2>
                     <p>our mealkit</p>
                       <div class="card-body">
                        <IngridientsList/>
                        <TaxonomyInt/>
                       </div>
                  </div>
   
                  <div className={styles.cardred} class="card-title">
                      <h2>CO2</h2>
                       <p>NOT our mealkit</p>
                       <div>
                        <IngridientsListExt/>
                        <TaxonomyExt/>
                       </div>
                  </div>
                  
            </div>
            <h2 className="mt-10 text-center">Now you know more about your diet's carbon footprint!!!</h2>
   <div className="flex justify-center mx-auto mt-5 mb-10 align-text-bottom"><span className="text-xl text-white block py-1.5">Play the</span><button onClick={()=>router.push("/game")} className="mx-2 py-1.5 px-4 transition-colors bg-green-600 border active:bg-green-800 font-medium border-green-700 text-white rounded-lg hover:bg-green-700 disabled:opacity-50">
                Game
              
          </button> <span className="text-xl text-whote  block py-1.5">to get a discount!</span></div>
        </div>
      
      </>
  
    );
  }
