import Footer from '../components/footer.js';
import Head from '../components/head.js';
import Header from '../components/header.js';
import Main from '../components/main.js';


export default function CookieStandForm() { 

  return (
  <div className='flex flex-col h-screen bg-emerald-50'>
    <Head />
    < Header />
    <Main />
    <Footer />
  </div>
  );
}