import Footer from '../components/footer.js';
import Head from '../components/head.js';
import Header from '../components/header.js';
import Main from '../components/main.js';
// import { useState } from 'react';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource.js';


export default function Home() {

  const { user, login, logout } = useAuth();

  function loginHandler(newUser) {
      login(newUser.username, newUser.password);

  }


  return (
      <>
          <Head>
              <title>Cookie Stand Demo</title>
          </Head>
          <div>
              {
               user ? <p>Welcome {user.username}</p> : <LoginForm onLogin={loginHandler} />
               // user ? <CookieStandAdmin user={user} logout={logout} /> : <LoginForm onLogin={loginHandler} />
              }

          </div>
      </>
  )
}

function CookieStandAdmin({ user, logout }) {

  const { resources, deleteResource } = useResource();

  return (
      <div>
          <p>Welcome {user.username}</p>

          <button onClick={logout}>Log Out</button>
          <CookieStandForm />
          {/* <CookieStandTable stands={resources} deleteStand={deleteResource} /> */}
      </div>
  );
}



function CookieStandForm() { 

  return (
  <div className='flex flex-col h-screen bg-emerald-50'>
    <Head />
    < Header />
    <Main />
    <Footer />
  </div>
  );
}

function LoginForm({ onLogin }) {

  function submitHandler(event) {
      event.preventDefault();
      const newUser = {
          username: event.target.username.value,
          password: event.target.password.value,
      };

      onLogin(newUser);
  }

  return (
      <form onSubmit={submitHandler}>
          <input placeholder="username" name="username" />
          <input type="password" name="password" placeholder="password" />
          <button>Log In</button>
      </form>
  );
}