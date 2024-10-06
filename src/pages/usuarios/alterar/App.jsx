import "./App.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

export default function Alterarusuario() {
    const [usuario, setUsuario] = useState('');
    const [id, setId] = useState('');
   
    async function salvar() {
        let paramCorpo = {
            "nm_usuario": usuario,
        };

        try {
            const url = `http://localhost:5010/usuario/${id}`;
            await axios.put(url, paramCorpo); 
            alert('Usuário alterado com sucesso.');
        } catch (error) {
            console.error("Erro ao alterar o usuário:", error);
            alert("Erro ao alterar o usuário. Verifique se o ID está correto.");
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Alterar Usuário</h1>
            </div>
            <div className='tabela'>
                <div>
                    <label>ID do Usuário:</label>
                    <input type='text' value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label>Nome do Usuário:</label>
                    <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}>SALVAR</button>
            <Link to="/usuarios/home">
                <button className="voltar">
                    <h1 className="seta">←</h1>
                </button>
            </Link>
        </div>
    );
}
