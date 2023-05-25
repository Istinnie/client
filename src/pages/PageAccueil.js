import React, { useEffect, useState } from "react";
import Repas from "../components/Repas";
import NavBar from "../components/NavBar";
import backImg from "../assets/img/repas-back.png";
import { Link } from "react-router-dom";
import axios from "axios";
const PageAccueil = ({ data }) => {
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
  let [query, setQuery] = useState("e");
  let [datas, setData] = useState([]);
  // let [sortMethod, setSortMethod] = useState("top");
  const fetchData = () => {
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const searchInput = (e) => {
    setQuery(e.target.value);
  };

  // const topFlopClick = () => {
  //   if (sortMethod === "top") {
  //     setSortMethod("flop");
  //   } else {
  //     setSortMethod("top");
  //   }
  // };

  return (
    <>
      <NavBar />
      <div>
        <div className="preambule-content">
          <div className="content-title">
            <h2>Menu du jour</h2>
            <span>
              Manzer.re est une entreprise fictive qui permet aux commerçants de
              mettre en ligne leur repas du jour.
            </span>
          </div>
          <div className="content-section">
            <form onSubmit={searchSubmit} className="content-form">
              <input
                type="text"
                placeholder="Rechercher"
                onInput={searchInput}
              />
              {/* <input type="submit" value="Rechercher" />
              <button
                onClick={topFlopClick}
                title="Trier les films par ordre de popularité"
              >
                {sortMethod.toUpperCase()}
              </button> */}
              <div className="form-secteur">
                <label class="main">
                  Nord
                  <input type="checkbox" />
                  <span class="geekmark"></span>
                </label>

                <label class="main">
                  Ouest
                  <input type="checkbox" />
                  <span class="geekmark"></span>
                </label>

                <label class="main">
                  Sud
                  <input type="checkbox" />
                  <span class="geekmark"></span>
                </label>
                <label class="main">
                  Est
                  <input type="checkbox" />
                  <span class="geekmark"></span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <section>
          <div className="repas-container">
            {data &&
              data
                // .sort((a, b) => {
                //   if (sortMethod === "top") {
                //     return b.vote_average - a.vote_average;
                //   } else {
                //     return a.vote_average - b.vote_average;
                //   }
                // })
                .map((repas, index) => {
                  return (
                    <Repas
                      key={index}
                      nom={repas.nom}
                      ingredient={repas.ingredient}
                      image={repas.image}
                      id={repas.id}
                    />
                  );
                })}
          </div>
        </section>
      </div>
      <div className="img-back-bottom">
        <img src={backImg} alt="" />
      </div>
    </>
  );
};

export default PageAccueil;
