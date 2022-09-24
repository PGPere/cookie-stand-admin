import styles from '../styles/Home.module.css'
import Head from 'next/head';


export default function Form() { 
  return (

  <div class='flex flex-col h-screen bg-emerald-50'>
    <Head>
        <title>Cookie Stand Admin</title>
    </Head>
    <header>
        <h1 className='bg-emerald-400 text-xl font-semibold py-3 pl-3'>Cookie Stand Admin</h1>
    </header>
      <main className='bg-emerald-300 w-2/3 m-auto mt-6 border-solid'>
      <form action="/api/form" method="post">
        <p className='text-md text-lg font-semibold text-center py-4'>
          Create Cookie Stand
        </p>
        <div>
        <label htmlFor="Loc">Location</label>
        <input type="text" id="Loc" name="Loc" required />
        </div>

        
          <div>
          <label htmlFor="Min">Minimum Customers Per Hour</label>
          <input type="text" id="Min" name="Min" required />
          </div>
          
          <label htmlFor="Max">Maximum Customers per Hour</label>
          <input type="text" id="Max" name="Max" required />
          <label htmlFor="Avg">Average Cookies per Sale</label>
          <input type="text" id="Avg" name="Avg" required />
        
          
        <div class='flex space-x-2 py-2 pl-3'>
            <button type="button" class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">CREATE</button>
        </div>
        <p>
          Report Table Coming Soon...
        </p>

        <p>
          {'{"location":"Barcelona","minCustomers":2,"maxCusotmers":4,"avgCookies":2.5}'}
        </p>
      </form>
      </main>
      <footer className='bg-emerald-400 text-xs mb-auto py-2 pl-3'>{'©'}2022</footer>
    </div>
  )
}