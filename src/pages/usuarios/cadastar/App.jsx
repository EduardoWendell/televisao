import "./App.scss"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

 export default function Cadastrarusuario() {
  const [usuario, setusuario] = useState('');


  async function salvar() {
      let paramCorpo = {
          "nm_usuario": usuario,
      };

      try {
          const url = 'http://localhost:5010/usuario';
          let resp = await axios.post(url, paramCorpo);
          alert('Novo canal adicionado. Id: ' + resp.data.novoId);
      } catch (error) {
          console.error("Erro ao salvar o usuario:", error);
          alert("Erro ao adicionar o usuario.");
      }
  }

  return (
        <div>
          <div className="titulo">
          <h1>Cadastro de usuario</h1>
          </div>
          <div className='tabela'>
                <div>
                    <label>Nome de usuario:</label>
                    <input type='text'value={usuario} onChange={e => setusuario(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar} > SALVAR </button>
            <Link to="/usuarios/home"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
        </div>
      );
    }
