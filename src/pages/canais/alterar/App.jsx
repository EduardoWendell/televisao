import "./App.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

export default function Alterarcanal() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [id, setId] = useState('');
    const [aberto, setAberto] = useState(false);

    async function salvar() {
        let paramCorpo = {
            "nm_canal": nome,
            "nr_canal": numero,
            "bt_aberto": aberto,
        };
        try {
            const url = `http://localhost:5010/canais/${id}`;
            await axios.put(url, paramCorpo); 
            alert('Canal alterado com sucesso.');
        } catch (error) {
            console.error("Erro ao alterar o canal:", error);
            alert("Erro ao alterar o canal.");
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Alterar Canal</h1>
            </div>
            <div className='tabela'>
                <div>
                    <label>ID do Canal:</label>
                    <input type='text' value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div>
                    <label>Nome do Canal:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Número do canal:</label>
                    <input type='text' value={numero} onChange={e => setNumero(e.target.value)} />
                </div>
                <div>
                    <label>Aberto:</label>
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>
            </div>
            <button onClick={salvar}>SALVAR</button>
            <Link to="/canais/home">
                <button className="voltar">
                    <h1 className="seta">←</h1>
                </button>
            </Link>
        </div>
    );
}
