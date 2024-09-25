function Home() {
  return (
    <>
      <div className="flex-container">
        <section className="container1">
          <h2>Granulo</h2>
          <p>Bureau d'études techniques</p>
        </section>
        <section className="container2">
          <h2>Granulo Maçonnerie</h2>
          <p>Entreprise de maçonnerie terre crue,</p>
          <p>pierre et matériaux biosourcés</p>
        </section>
      </div>

      <section className="intro">
        <p>
          Granulo, bureau d'étude spécialiste de l’écoconstruction, installé à
          Betton, combine l'ingénierie et la maçonnerie pour créer des bâtiments
          durables et respectueux de l'environnement
        </p>
        <p>Nous proposons des missions de </p>
        <p>
          <strong>Conseil - Conception - Chantier</strong>
        </p>
      </section>

      <section className="localisation">
        <p>
          Couvrant le <strong>Grand Ouest</strong>, Granulo s’appuie sur les
          compétences croisées et complémentaires de{" "}
          <strong>ses trois associés</strong>. En effet, nous abordons les
          domaines de l’architecture, l’ingénierie thermique, l’ingénierie
          environnementale, l’ingénierie structure, la conduite d’opérations et
          la maçonnerie terre crue.
        </p>
        <p>
          Notre activité concerne <strong>la construction neuve</strong> mais
          surtout <strong>la rénovation et la réhabilitation du bâti existant</strong>, pour la maîtrise d’oeuvre publique, privée et les entreprises de construction.
        </p>
      </section>

      <h2 className="valeurtitre">Nos Valeurs</h2>
      <div className="valeurcontainer">
        <section className="valeur1">
          <h3>
            <strong> Une entreprise collective, réaliste et optimiste</strong>
          </h3>
          <p>
            Avoir du sens dans le travail, Coopérer et être efficace, Etre libre
            et prendre du plaisir au travail, Etre cohérent pour un travail de
            qualité, Etre déterminé et endurant, Créer du lien avec et auprès
            des acteurs de l’ensemble de la chaîne de valeurs, Partager entre
            nous et autour de nous le savoir et la donnée
          </p>
        </section>
        <section className="valeur2">
          <h3>
            <strong> La promotion d’un environnement bâti de qualité</strong>
          </h3>
          <p>
            Participer à la préservation du patrimoine (culture, identité,
            localité), Respecter les ressources (matériaux, eau, énergies,
            biodiversité, ...), Soutenir les filières bio et géosourcées,
            Favoriser le confort des personnes et leur santé
          </p>
        </section>
      </div>

      <div className="missions">
        <h2>Nos missions</h2>
        <p>
          Notre forte implantation et activité régionales nous donne une vision
          et une connaissance détaillée des réseaux et des acteurs de la
          construction, que nous nous proposons de mettre à la disposition de
          nos clients. Notre expérience professionnelle variée et complémentaire
          nous place aux avant-postes quant aux sujets ayant trait au
          diagnostic, à la conception, à la prescription, à l’accompagnement de
          projets intégrant les matériaux géo et biosourcés et à leur
          réalisation. Nos missions sont regroupées selon les 3 champs
          d’activité suivants :
        </p>
      </div>

      <div className="missionscontainer">
        <section className="conseil">
          <h3>Conseil</h3>
          <ul>
            <li>Missions de convenance de terre crue</li>
            <li>Conseil et stratégie matériaux et filières</li>
            <li>R&D matériaux </li>
            <li>Formations</li>
          </ul>
        </section>

        <section className="conception">
          <h3>Conception</h3>
          <ul>
            <li>Diagnostic avec expertise bâti ancien</li>
            <li>Assistance à maîtrise d'ouvrage AMO</li>
            <li>
              Accompagnement technique de maîtrise d'œuvre ATMOE : ingénierie
              structure et enveloppe, conception, dimensionnement et calculs,
              neuf et patrimoine, ingénierie thermique appliquée au bâtiment
            </li>
          </ul>
        </section>

        <section className="chantier">
          <h3>Chantier</h3>
          <ul>
            <li>
              Maçonnerie terre crue et pierres pour bâti ancien et construction
              neuve
            </li>
            <li>
              Assistance technique aux entreprises sur chantier ATE : essais,
              dessins d’exécution, sécurisation de la ressource, suivi
              logistique, coordination, suivi de chantier
            </li>
          </ul>
        </section>
      </div>

      <div className="clients">
        <h2>Nos Clients</h2>
      </div>

      <div className="clientscontainer">
        <section className="privé">
          <h3>Privé</h3>
          <ul>
            <li>Architectes et Maitres d'oeuvre</li>
            <li>Entreprises de construction et constructeurs</li>
            <li>Maitres d'ouvrages privés</li>
            <li>Acteurs de la formation</li>
            <li>Aménageurs privés</li>
          </ul>
        </section>

        <section className="public">
          <h3>Public</h3>
          <ul>
            <li>Maitres d'ouvrage publique</li>
            <li>Services "techniques"</li>
            <li>Institutions</li>
            <li>Organismes de recherche</li>
            <li>Enseignement</li>
            <li>Aménageurs publics</li>
          </ul>
        </section>

        <section className="particuliers">
          <h3>Particuliers</h3>
          <ul>
            <li>Milieu rural et urbain</li>
            <li>Individuel et collectif</li>
            <li>Neuf et ancien</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Home;
