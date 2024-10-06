import "./App.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

export default function Cadastrarcanal() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto,
        };

        try {
            const url = 'http://localhost:5010/canais';
            let resp = await axios.post(url, paramCorpo);
            alert('Novo canal adicionado. Id: ' + resp.data.novoId);
        } catch (error) {
            console.error("Erro ao salvar o canal:", error);
            alert("Erro ao adicionar o canal.");
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Cadastro de Canal</h1>
            </div>
            <div className='tabela'>
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
