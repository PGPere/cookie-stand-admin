import styles from '../styles/Home.module.css'
import Head from 'next/head';


export default function Form() { 
  return (
    <body className={styles.container}>
      <Head>
          <title>Cookie Stand Admin</title>
      </Head>
      <header>
          <h1 className={styles.h1}>Cookie Stand Admin</h1>
      </header>
      <main className={styles.main}>

      <form action="/api/form" method="post">
        <p className={styles.p}>
          Create Cookie Stand
        </p>
        <div>
        <label htmlFor="Loc">Location</label>
        <input type="text" id="Loc" name="Loc" required />
        </div>

        <span className={styles.grid}>
          <label htmlFor="Min">Minimum Customers Per Hour</label>
          <input type="text" id="Min" name="Min" required />
          <label htmlFor="Max">Maximum Customers per Hour</label>
          <input type="text" id="Max" name="Max" required />
          <label htmlFor="Avg">Average Cookies per Sale</label>
          <input type="text" id="Avg" name="Avg" required />
        </span>
          
        <div class="flex space-x-2 ">
            <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">CREATE</button>
        </div>
        
        <p className={styles.description}>
          Report Table Coming Soon...
        </p>

        <p className={styles.description}>
          {'{"location":"Barcelona","minCustomers":2,"maxCusotmers":4,"avgCookies":2.5}'}
        </p>

      </form>
      </main>
      <footer className={styles.footer}>@2022</footer>
    </body>
  )
}