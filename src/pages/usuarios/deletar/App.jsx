import "./App.scss"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

 export default function Deletarusuario() {
  const [idusuario, setIdusuario] = useState('');

  async function deletar() {
      try {
          const url = `http://localhost:5010/usuario/${idusuario}`;
          await axios.delete(url); 
          alert('usuario deletado com sucesso.');
      } catch (error) {
          console.error("Erro ao deletar o canal:", error);
          alert("Erro ao deletar o usuario.");
      }
  }
  return (
        <div>
          <div className="titulo">
          <h1>Deletar usuario</h1>
          </div>
        <div className='tabela'>
            <div>
                <label>Id do usuario:</label>
                <input type='text'value={idusuario} onChange={e => setIdusuario(e.target.value)} />
             </div>
        </div>

            <button onClick={deletar} > Deletar </button>
            
            <Link to="/usuarios/home"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }