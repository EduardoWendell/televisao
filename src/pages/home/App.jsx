import { Link } from "react-router-dom";
import "./App.scss";

export default function Home() {
  return (
    <div>
      <div className="titulo">
        <h1>Televisão</h1>
      </div>
      <div className='cabeca'>
        <Link to="/canais/home">
          <div>
            <button><h1>Canal</h1></button> 
          </div>
        </Link>
        <Link to="/programas/home">
          <div>
            <button><h1>Programa</h1></button> 
          </div>
        </Link>
        <Link to="/usuarios/home">
          <div>
            <button><h1>Usuario</h1></button> 
          </div>
        </Link>
        <Link to="/programafav/home">
          <div>
            <button><h1>Programa favorito</h1></button> 
          </div>
        </Link>
      </div>
    </div>
  );
}