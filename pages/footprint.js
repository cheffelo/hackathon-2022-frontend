import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IngridientsList from './components/IngridientsList';
import IngridientsListExt from './components/IngridientsListExt';
import TaxonomyInt from './components/TaxonomyInt';
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
    <div><h1 style={{textAlign: "center", color: 'crimson'}} > What's your diet's carbon footprint? </h1></div>
  
  
      <div  class="CO2-calculation" >
  
          <h2 style={{textAlign: "center"}}> Let's find out the impact of your choice from food to the environment </h2>
  
  
  
            <div className={styles.grid}>
                  
                  <div className={styles.cardgreen} class="card-title"><Header title="CO2" /> <Header title="our mealkit"/>
                    <div class="card-body">
                        <IngridientsList/>
                        <TaxonomyInt/>
                        
                    </div>
   
                  </div>
   
                  <div className={styles.cardred} class="card-title"><Header title="CO2" /> <Header title="NOT our mealkit"/>
                    <div class="card-body">
                        <IngridientsListExt/>
                    </div>
   
                  </div>
                  
            </div>
  
        
                    
          <div className={styles.card}>
                  <div class="card-title">Play game:</div>      
          </div>
  
  
        </div>
      </>
  
    );
  }
