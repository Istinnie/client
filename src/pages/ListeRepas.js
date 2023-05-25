import React, { useEffect, useState } from "react";
import Repas from "../components/Repas";
import NavBar from "../components/NavBar";
import backImg from "../assets/img/repas-back.png";
import { Link } from "react-router-dom";
import axios from "axios";
const ListeRepas = ({ data }) => {
  window.scrollTo(0, 0);
  let [query, setQuery] = useState("e");
  let [datas, setData] = useState([]);
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

  return (
    <>
      <NavBar />
      <div>
        <div className="preambule-content-profile">
          <div className="content-title-profile">
            <h2>Profil</h2>
          </div>
          <div className="content-form">
            <form onSubmit={searchSubmit}>
              <input
                type="text"
                placeholder="Rechercher"
                onInput={searchInput}
              />
            </form>
          </div>
        </div>
        <section>
          <div className="repas-container">
            {data &&
              data.map((repas, index) => {
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

export default ListeRepas;
