import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Programmes & Notions </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Programmes & Notions</h1>

        <p className={styles.description}>
          Retrouvez les thèmes des programmes des différents niveaux, les
          questions de gestion et les fiches notions associées
          <code className={styles.code}>par IO</code>
        </p>

        <div className={styles.grid}>
          <Link href="/themes" className={styles.card}>
            <a>
              <h2>Terminale STMG &rarr;</h2>
            </a>
          </Link>
          <Link href="/themes" className={styles.card}>
            <a>
              <h2>BTS MUC &rarr;</h2>
            </a>
          </Link>
          <Link href="/themes" className={styles.card}>
            <a>
              <h2>BTS FLUT &rarr;</h2>
            </a>
          </Link>

          <Link href="/themes" className={styles.card}>
            <a>
              <h2>Programme X &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
