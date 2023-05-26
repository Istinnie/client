import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Repas = ({ nom, ingredient, image, id }) => {
  const [repas, setRepas] = useState([]);
  const removeData = (id) => {
    axios.delete(`http://localhost:5000/api/repas/${id}`).then((res) => {
      alert("Repas supprimé avec succès");
      setRepas(res.data);
      window.location.reload();
    });
  };
  return (
    <div className="recipe">
      <h3>{nom}</h3>
      <div className="img-container">
        <img src={`${image}`} alt="Logo-Recipe" />
      </div>

      <div className="info-container">
        <div className="info-title">
          <span>Ingrédient : {`${ingredient}`}</span>
        </div>
        <div>
          <div className="button-edit">
            <Link
              style={{ textDecoration: "none" }}
              to={`/ficheRepas/${id}`}
              className="logo-paiement"
            >
              <span>Détail</span>
            </Link>
          </div>
          <div className="button-delete" onClick={() => removeData(id)}>
            <span title="Supprimer ce repas">Supprimer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repas;
