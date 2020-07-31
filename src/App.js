import React from 'react';
import './App.css';
import LoginButton from './containers/Auth/login';
import LogoutButton from './containers/Auth/logout';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...{error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div> Hello!
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
        >
        Log Out
        </button>
      </div>
    );
    } else {
      return <button onClick={loginWithRedirect}>Login</button>
    }
  }

  export default App;