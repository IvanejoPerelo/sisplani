import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Home, Login, RegistroDes, RegistroHab, RegistroAfp, ListarEmp } from "../pages";
import { Layout } from "../components";
import RegistroEmp from "../pages/RegistroEmp";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    {/* <Route path="/" element={<Home/>}/> */}
                    <Route path="/" element={<Login/>}/>
                    <Route element={<Layout/>}>
                        <Route path="/inicio" element={<Home/>}/>
                        <Route path="/registroemp" element={<RegistroEmp/>}/>
                        <Route path="/registrohab" element={<RegistroHab/>}/>
                        <Route path="/registrodes" element={<RegistroDes/>}/>
                        <Route path="/registroafp" element={<RegistroAfp/>}/>    
                        <Route path="/listaremp" element={<ListarEmp/>}/>    
                   </Route> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}