import { Link } from "react-router-dom";

const Repas = ({ nom, ingredient, image, id }) => {
  //const Repas = () => {
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
        <div className="button-res">
          <div>
            <span>Réserver</span>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repas;
