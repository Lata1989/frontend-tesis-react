import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Home } from './pages/public/Home';
import { Dashboard } from './pages/private/Dashboard';

export const App = () => {
  const { isAuthenticated, isLoading } = useAuth0(); // Verifica si el usuario está autenticado

  // Mostrar una pantalla de carga mientras Auth0 verifica el estado de autenticación
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Ruta pública (Home) */}
        <Route path="/" element={<Home />} />

        {/* Ruta protegida (Dashboard) */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} // Redirige a Home si no está autenticado
        />
      </Routes>
    </Router>
  );
};

/*
import { LoginButton } from "./components/LoginButton/LoginButton";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { LogoutButton } from "./components/LogoutButton/LogoutButton";

export const App = () => {

  return (
    <>
      <h1>Aplicacion React</h1>
      <LoginButton></LoginButton>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
    </>
  );
}
*/
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/