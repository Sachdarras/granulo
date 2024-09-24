import { Outlet } from "react-router-dom";
import './app.scss'; 
import Nav from './components/Nav'; 

function App() {
  return (
    <div>
      <header>
        <h1 className="mainlogo">
          <img src="" alt="logo granulo" /> 
        </h1>
        <Nav /> 
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2024 Mon Site Web</p>
      </footer>
    </div>
  );
}

export default App;
