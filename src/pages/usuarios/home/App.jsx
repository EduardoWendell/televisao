import "./App.scss"
import { Link } from "react-router-dom";

 export default function Homeusuarios() {
  return (
        <div>
          <div className="titulo">
          <h1>Usuarios</h1>
          </div>
          <div className='cabeca'>
            <Link to='/usuarios/cadastrar'>
            <div>
                   <button><h1>Cadastrar</h1></button> 
                </div>
            </Link>
                <Link to='/usuarios/consultar'>
                <div>
                <button><h1>Consultar</h1></button> 
                </div>
                </Link>
                <Link to='/usuarios/deletar'>
                 <div>
                    <button><h1>Deletar</h1></button> 
                 </div>
                </Link>
                <Link to='/usuarios/alterar'>
                <div>
                <button><h1>Alterar</h1></button> 
                </div>
                </Link>
                
            </div>
            <Link to="/"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }