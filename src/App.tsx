import { Routes, Route } from "react-router-dom";
import AdminPratos from "./paginas/AdminRestaurantes/AdminPratos/AdminPratos";
import FormularioPrato from "./paginas/AdminRestaurantes/AdminPratos/FormlarioPrato";
import AdminRestaurantes from "./paginas/AdminRestaurantes/AdminRestaurantes";
import FormularioRestaurante from "./paginas/AdminRestaurantes/FormularioRestaurante";
import PgBaseAdmin from "./paginas/AdminRestaurantes/PgBaseAdmin";
import Home from "./paginas/Home";
import VitrineRestaurantes from "./paginas/VitrineRestaurantes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />

      <Route path="/admin" element={<PgBaseAdmin/>}>
        <Route path="restaurantes" element={<AdminRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormularioRestaurante />} />
        <Route path="restaurantes/:id" element={<FormularioRestaurante />} />

        <Route path="pratos" element={<AdminPratos />} />
        <Route path="pratos/novo" element={<FormularioPrato />} />


      </Route>
    </Routes>
  );
}

export default App;
