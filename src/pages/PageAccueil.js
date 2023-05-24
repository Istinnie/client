import React, { useEffect, useState } from "react";
import Repas from "../components/Repas";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
const PageAccueil = () => {
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
  let [data, setData] = useState([]);
  let [sortMethod, setSortMethod] = useState("top");
  const fetchData = () => {
    axios.get("http://localhost:5000/api/repas").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <div>
        <section className="repas-container">
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
        </section>
      </div>
    </>
  );
};

export default PageAccueil;
