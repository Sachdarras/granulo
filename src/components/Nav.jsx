import React, { useState } from "react";

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
        <a href="/home">Accueil</a>
        <a href="/equipe">Equipe</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;
