import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importer Link

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navi">
      {!isOpen && ( // Affiche l'icône seulement si le menu n'est pas ouvert
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Symbole du menu burger */}
        </div>
      )}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>{" "}
        {/* Bouton de fermeture */}
        <Link to="/home" onClick={toggleMenu}>Accueil</Link>
        <Link to="/equipe" onClick={toggleMenu}>Équipe</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
