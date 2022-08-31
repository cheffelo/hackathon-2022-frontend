import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Header({ title }) {
  return <h2>{title ? title : 'Default title'}</h2>;
}


export default function FootPrint(props) {
  return (
    <>
    <div>
      <Head >
        <h1 style={{textAlign: "center", color: 'crimson'}} > What's your diet's carbon footprint? </h1>
        <p></p>
      </Head>


    </div>


    <div  class="CO2-calculation" >

        <h2 style={{textAlign: "center"}}> Let's find out the impact of your choice from food to the environment </h2>



          <div className={styles.grid}>
                
                <div className={styles.cardgreen} class="card-title"><Header title="CO2 our mealkit" />
                  <div class="card-body">
                    <li>tomato: CO2</li>
                    <li>Beef: CO2</li>
                  </div>
 
                </div>
 
                <div className={styles.cardred} class="card-title"><Header title="CO2 NOT our mealkit" />
                  <div class="card-body">
                    <li>tomato: CO2</li>
                    <li>Beef: CO2</li>
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