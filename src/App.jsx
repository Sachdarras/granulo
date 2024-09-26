import { Outlet } from "react-router-dom";
import "./app.scss";
import Nav from "./components/Nav";
import logo from "./assets/logo/logo.png"; 

function App() {
  return (
    <div>
      <header>
        <h1 className="mainlogo">
          <img src={logo} alt="logo granulo" /> 
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
