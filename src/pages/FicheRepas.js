import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import backImg from "../assets/img/repas-back.png";
import { Link } from "react-router-dom";
import axios from "axios";
const FicheRepas = () => {
  window.scrollTo(0, 0);
  const [getRepas, setgetRepas] = useState([]);
  let paramID = useParams();

  let nom, ing, rest;

  const fetchGetRepas = async () => {
    await axios
      .get(`http://localhost:5000/api/repas/${paramID.id}`)
      .then((response) => setgetRepas(response.data));
  };

  useEffect(() => {
    fetchGetRepas();
  }, []);
  if (typeof paramID.id === "undefined") {
    nom = "";
    ing = "";
    rest = "";
  } else {
    nom = getRepas.nom;
    ing = getRepas.ingredient;
    rest = "Exemple";
  }

  return (
    <>
      <NavBar />
      <div>
        <div>
          <section>
            <div className="preambule-content-profile">
              <div>
                <form>
                  <div className="recipe-table">
                    <div className="preambule-content">
                      <div className="content-title">
                        <h2>Fiche Repas</h2>
                      </div>
                    </div>
                    <table>
                      <tr>
                        <td>Nom</td>
                        <td>
                          <input
                            type="text"
                            value={nom}
                            className="name-value"
                          />
                          {/* <h3>{getRepas.nom}</h3> */}
                        </td>
                      </tr>
                      <tr>
                        <td>Ingrédients</td>
                        <td>
                          <input
                            type="text"
                            value={ing}
                            className="name-value"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Restaurant</td>
                        <td>
                          <input
                            type="text"
                            value={rest}
                            className="name-value"
                          />
                        </td>
                      </tr>
                    </table>
                    <div className="button-valid">
                      <div>
                        <span>Enregistrer</span>
                        {/* </Link> */}
                      </div>
                    </div>
                    <div className="button-delete">
                      <div>
                        <span>Suppprimer</span>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div className="img-back-bottom">
          <img src={backImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default FicheRepas;
