import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to <a href="">PLUTO</a>
        </h1>

        <p className={styles.description}>
         Become a DeFi Funded trader today!
        </p>

      </main>

      <footer className={styles.footer}>
        <a href="_" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by 0xdeivid
        </a>
      </footer>
    </div>
  );
};

export default Home;
