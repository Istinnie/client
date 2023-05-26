import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import PageAccueil from "./pages/PageAccueil";
import ListeRepas from "./pages/ListeRepas";
import FicheRepas from "./pages/FicheRepas";
import AjoutRepas from "./pages/AjoutRepas";
import axios from "axios";
import env from "react-dotenv";
function App() {
  return (
    <div>
      {/* put your navbar here */}

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<PageAccueil />} />
          <Route path="/repas" element={<ListeRepas />} />
          <Route path="/ficheRepas/:id" element={<FicheRepas />} />
          <Route path="/ficheRepas" element={<AjoutRepas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//////////////////

// // import "./style/style.scss";

// function App() {
//   const [repasListe, setrepasListe] = useState([]);
//   const fetchRepas = () => {
//     axios
//       .get("http://localhost:5000/api/repas")
//       .then((response) => setrepasListe(response.data));
//   };
//   useEffect(() => {
//     fetchRepas();
//   }, []);
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<HomePage repasListe={repasListe} />}></Route>
//         <Route
//           path="/repasList"
//           element={<ListeProduit repasListe={repasListe} />}
//         ></Route>
//         <Route path="/repas/:id" element={<FicheProduit />}></Route>
//          */}
//         <Route path="/" element={<PageAccueil />} />
//         <Route path="/repas" element={<ListeRepas />} />
//         <Route path="/ajoutRepas" element={<AjoutRepas />} />
//         <Route path="/ficheRepas/:id" element={<FicheRepas />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
