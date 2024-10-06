import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homecanal from "./pages/canais/home/App";
import Homeprogamas from "./pages/progamas/home/App";
import Homeusuarios from "./pages/usuarios/home/App";
import Homeprogramafav from "./pages/programafav/home/App";
import Home from "./pages/home/App";
import Cadastrarcanal from "./pages/canais/cadastrar/App";
import Cadastrarprograma from "./pages/progamas/cadastar/app";
import Cadastrarusuario from "./pages/usuarios/cadastar/App";
import Cadastrarprogramafav from "./pages/programafav/cadastrar/App";
import Deletarcanal from "./pages/canais/deletar/App";
import Deletarprograma from "./pages/progamas/deletar/App";
import Deletarusuario from "./pages/usuarios/deletar/App";
import Consultarcanal from "./pages/canais/consultar/App";
import Alterarcanal from "./pages/canais/alterar/App";
import Consultarusuario from "./pages/usuarios/consultar/App";
import Alterarusuario from "./pages/usuarios/alterar/App";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/canais/home' element={<Homecanal />} />
                <Route path='/programas/home' element={<Homeprogamas />} />
                <Route path='/usuarios/home' element={<Homeusuarios />} />
                <Route path='/programafav/home' element={<Homeprogramafav />} />
                <Route path='/canais/cadastrar' element={<Cadastrarcanal/>}/>
                <Route path='/programas/cadastrar' element={<Cadastrarprograma/>}/>
                <Route path='/usuarios/cadastrar' element={<Cadastrarusuario/>}/>
                <Route path='/programafav/cadastrar' element={<Cadastrarprogramafav/>}/>
                <Route path='/canais/deletar' element={<Deletarcanal/>}/>
                <Route path='/programas/deletar' element={<Deletarprograma/>}/>
                <Route path='/usuarios/deletar' element={<Deletarusuario/>}/>
                <Route path='/canais/consultar' element={<Consultarcanal/>}/>
                <Route path='/canais/alterar' element={<Alterarcanal/>}/>
                <Route path='/usuarios/consultar' element={<Consultarusuario/>}/>
                <Route path='/usuarios/alterar' element={<Alterarusuario/>}/>

            </Routes>
        </BrowserRouter>
  );
}