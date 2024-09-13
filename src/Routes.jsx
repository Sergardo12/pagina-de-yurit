import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Login from "./Pages/Login";
import Patrones from "./Pages/Patrones";
import ProtectedRoute from "../src/components/ProtectedRoute/ProtectedRoute.jsx";


function AppRoutes() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/login" element={<Login />} /> {/* Ruta para la página de login */}
          <Route path="/patrones" element={<ProtectedRoute element={<Patrones />} />} />
        
         
      </Routes>
    </BrowserRouter>
   
    </>

   

  )
}

export default AppRoutes;
