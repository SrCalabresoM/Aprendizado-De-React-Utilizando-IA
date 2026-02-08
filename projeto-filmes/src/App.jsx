import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { Favoritos } from './shared/FavoritosContext.jsx'
import { AuthContextProvider } from './shared/useAuth.jsx'
import { useAuth } from './shared/useAuth.jsx'


function AppContent() {
  const { user } = useAuth();

  return (
    <>
      <nav>
        {console.log(user)}
        <Link to="/">Home</Link> {" | "}
        <Link to="/catalogo">Catálogo</Link> {" | "}
        <Link to="/favoritos">Favoritos</Link> {" | "}
        <Link to={user ? "/perfil" : "/cadastro"}>{user ? user.user_metadata?.name : "Cadastro"}</Link>
      </nav>

      <AppRoutes />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Favoritos>
          <AppContent />
        </Favoritos>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App
