import "./App.scss"
import { Link } from "react-router-dom";


 export default function Cadastrarprogramafav() {
  return (
        <div>
          <div className="titulo">
          <h1>Cadastro de programa favorito</h1>
          </div>
          <div className='tabela'>
                <div>
                    <label>Id_usuario:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>id_Programa:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Avaliação:</label>
                    <input type='text' />
                </div>
            </div>
            <button > SALVAR </button>
            <Link to="/programafav/home"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }
