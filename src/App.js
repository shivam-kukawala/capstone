import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Cart from './components/Cart/Cart' 
import fire from './components/login/fire';
import Login from './components/login/Login';
import Hero from './components/login/Hero';
import './components/login/App.css';

const App = () =>{

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('false');

  const clearInputs = () =>
  {
    setEmail('');
    setPasswordError('');
  }

  const clearError = () =>
  {
    setEmailError('');
    setPasswordError('');
  }



  const handleLogin = () =>
  {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => 
        {
          
          // eslint-disable-next-line default-case
          switch (err.code)
          {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
  };

  const handlesignup = () =>
  {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => 
        {
          
          // eslint-disable-next-line default-case
          switch (err.code)
          {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
  };
  
  const handleLogout = () =>
  {
    fire.auth().signOut();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authListener = () =>
  {
    fire.auth().onAuthStateChanged(user => {
      if(user)
      {
        clearInputs();
        setUser(user);
      }
      else
      {
        setUser('');
      }
    });
  };
  
  useEffect (() =>{
    authListener();
  }, [authListener]);
  

  return (
    <Provider store={store}>
    <div className="App">
    {user ? (
        <Hero
        handleLogout={handleLogout}/>
      ) : (
        <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handlesignup={handlesignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
      )}
      <Router >
          <Switch>
          </Switch>
        </Router>
    </div>
    </Provider>
  );
}



export default App;