import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import backImg from "../assets/img/repas-back.png";
import { Link } from "react-router-dom";
import axios from "axios";
const AjoutRepas = () => {
  // ""
  const [nom, setName] = useState();
  const [ingredient, setIngredient] = useState();
  //   const fetchGetRepas = async () => {
  const handleSubmit = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    // Handle validations
    await axios
      .post("http://localhost:5000/api/repas", { nom, ingredient })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          alert("Repas ajouté avec succès");
          nom = "";
          ingredient = "";
        }
        // Handle response
      });
  };

  return (
    <>
      <NavBar />
      <div>
        <div>
          <section>
            <div className="img-back-top">
              <img src={backImg} alt="" />
            </div>
            <div className="preambule-content-profile">
              <div>
                <form method="post" onSubmit={handleSubmit}>
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
                            className="name-value"
                            name="nom"
                            id="nom"
                            value={nom}
                            onChange={(e) => setName(e.target.value)}
                          />
                          {/* <h3>{getRepas.nom}</h3> */}
                        </td>
                      </tr>
                      <tr>
                        <td>Ingrédients </td>
                        <td>
                          <input
                            type="text"
                            className="name-value"
                            name="ingredient"
                            id="ingredient"
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Restaurant</td>
                        <td>
                          <input type="text" className="name-value" />
                        </td>
                      </tr>
                    </table>

                    <div>
                      <div>
                        <input type="submit" value="Enregistrer" />
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

export default AjoutRepas;
