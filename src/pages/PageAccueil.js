import React from "react";
import Repas from "../components/Repas";
import NavBar from "../components/NavBar";
// import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
const PageAccueil = ({ repasListe }) => {
  window.scrollTo(0, 0);
  // const [repasListe, setrepasListe] = useState([]);
  // const fetchRepas = () => {
  //   axios
  //     .get("http://localhost:5000/api/repas")
  //     .then((response) => setrepasListe(response.data));
  //   // .then((response) => console.log(response.data));
  // };
  // useEffect(() => {
  //   fetchRepas();
  // }, []);

  return (
    <>
      <NavBar />
      <div>
        <section className="games-list">
          <div className="games-title">
            <h2>Menu du jour</h2>
          </div>
          <div className="games-container">
            <Repas />
            <Repas />
            <Repas />
            <Repas />
          </div>
        </section>
      </div>
    </>
  );
};

export default PageAccueil;
