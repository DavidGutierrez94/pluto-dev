
import Link from 'next/link';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css';

const requestFunds:React.FC = ()=>{

  return (
    <div className={styles.container}>


      <main className={styles.main}>

        <h1 className={styles.title}>
          Request for a Funded Account
        </h1>

        <div className={styles.form}>
            <h2>Join Us!! </h2>
            <p>Apply!</p>
            <form>
              <label htmlFor="estAmount">Estimated amount: </label>
              <input type="text" name="estAmount"  required />
              <br />
              <br />
              <label htmlFor="tradesNum">Number of trades: </label>
              <input type="text" name="tradesNum"  required />
              <br />
              <br />
              <label htmlFor="estROI">Expected ROI: </label>
              <input type="text" name="estROI" required />
              <br />
              <br />
              <button type="submit">&rarr; Submit</button>
            </form>
          </div>
          
      </main>

      <footer className={styles.footer}>
      <Link href="/">
           Home
        </Link>
        <a href="_" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by 0xdeivid team
        </a>
      </footer>
    </div>
  );
};

export default requestFunds;
