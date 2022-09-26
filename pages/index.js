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
      <main className='bg-emerald-300 flex flex-col w-2/3 m-auto mt-10 rounded-lg'>
      <form action="/api/form" method="post">
        <p className='text-lg font-semibold text-center py-4'>
          Create Cookie Stand
        </p>
        <div className='flex flex-row mx-auto pl-3 pr-3'>
        <label className='h-6 pr-3' htmlFor="Loc">Location</label>
        <input type="text" id="Loc" name="Loc" required className='h-6 flex flex-grow'/>
        </div>
          {/* <div className='text-sm pt-10 grid grid-rows-2 grid-flow-col auto-rows-min'> */}
          {/* <div className ='flex-row'> */}
        <div className='grid grid-cols-4 place-content-evenly g-0'>
          <div className='flex flex-col items-stretch mt-6 text-xs pl-3 pr-3'>
          <label className='text-center' htmlFor="Min">Minimum Customers Per Hour </label>
          <input type="text" id="Min" name="Min" required className='h-6'/>
          </div>
          <div className='flex flex-col items-stretch mt-6 text-xs pl-3 pr-3'>
          <label className='text-center' htmlFor="Max">Maximum Customers per Hour</label>
          <input type="text" id="Max" name="Max" required className='h-6'/>
          </div>
          <div className='flex flex-col items-stretch mt-6 text-xs pl-3 pr-3'>
          <label className='text-center' htmlFor="Avg">Average Cookies per Sale</label>
          <input type="text" id="Avg" name="Avg" required className='h-6'/>
          </div>
          <div className='flex flex-col items-stretch mt-6 text-xs pl-3 pr-3'>
          <button type="button" className="h-12 bg-emerald-600 text-black font-medium duration-150 ease-in-out">CREATE</button>
          </div>
          </div>
        <div className='bg-emerald-50 mt-10 pt-6 text-sm text-center'>
          <p className='pt-6'> Report Table Coming Soon...</p>
          <p className='pt-6'>{'{"location":"Barcelona","minCustomers":2,"maxCusotmers":4,"avgCookies":2.5}'}</p>
        </div>
      </form>
      </main>
      <footer className='bg-emerald-400 text-xs mb-auto py-2 pl-3'>{'©'}2022</footer>
    </div>
  )
}