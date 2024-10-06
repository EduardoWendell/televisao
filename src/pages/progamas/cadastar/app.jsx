import "./app.scss"
import { Link } from "react-router-dom";


 export default function Cadastrarprograma() {
  return (
        <div>
          <div className="titulo">
          <h1>Cadastro de programa</h1>
          </div>
          <div className='tabela'>
                <div>
                    <label>Nome do progama:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>genero do programa:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>hora do programa:</label>
                    <input type='text' />
                </div>
            </div>
            <button > SALVAR </button>
            <Link to="/programas/home"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }
