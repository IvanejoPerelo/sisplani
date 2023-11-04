import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts";
import {
  Home,
  ListarEmp,
  Login,
  ModifAfp,
  ModifApo,
  ModifDes,
  ModifHab,
  RegistroDes,
  RegistroHab,
  RegistroAfp,
  RegistroApo,
  Planillas,
} from "../pages";
import { Layout } from "../components";
import RegistroEmp from "../pages/RegistroEmp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/inicio" element={<Home />} />
          <Route path="/listaremp" element={<ListarEmp />} />
          <Route path="/modifafp" element={<ModifAfp />} />
          <Route path="/modifapo" element={<ModifApo />} />
          <Route path="/planillas" element={<Planillas />} />
          <Route path="/registroemp" element={<RegistroEmp />} />
          <Route path="/registrohab" element={<RegistroHab />} />
          <Route path="/registrodes" element={<RegistroDes />} />
          <Route path="/registroafp" element={<RegistroAfp />} />
          <Route path="/registroapo" element={<RegistroApo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
