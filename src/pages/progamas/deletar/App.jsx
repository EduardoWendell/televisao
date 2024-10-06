import "./App.scss"
import { Link } from "react-router-dom";

 export default function Deletarprograma() {
  return (
        <div>
          <div className="titulo">
          <h1>Deletar programa</h1>
          </div>
        <div className='tabela'>
            <div>
                <label>Id do programa:</label>
                <input type='text' />
             </div>
        </div>

            <button > Deletar </button>
            
            <Link to="/canais/home"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }
