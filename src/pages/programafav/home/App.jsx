import "./App.scss"
import { Link } from "react-router-dom";

 export default function Homeprogramafav() {
  return (
        <div>
          <div className="titulo">
          <h1>Programa Favorito</h1>
          </div>
          <div className='cabeca'>
          <Link to='/programafav/cadastrar'>
          <div>
                   <button><h1>Cadastrar</h1></button> 
                </div>
          </Link>
                
                <div>
                <button><h1>Consultar</h1></button> 
                </div>
                <div>
                <button><h1>Deletar</h1></button> 
                </div>
                <div>
                <button><h1>Alterar</h1></button> 
                </div>
            </div>
            <Link to="/"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }