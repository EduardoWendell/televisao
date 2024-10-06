import "./App.scss";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

export default function Deletarcanal() {
    const [idCanal, setIdCanal] = useState('');

    async function deletar() {
        try {
            const url = `http://localhost:5010/canais/${idCanal}`;
            await axios.delete(url); 
            alert('Canal deletado com sucesso.');
        } catch (error) {
            console.error("Erro ao deletar o canal:", error);
            alert("Erro ao deletar o canal.");
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Deletar Canal</h1>
            </div>
            <div className='tabela'>
                <div>
                    <label>Id do Canal:</label>
                    <input
                        type='text'
                        value={idCanal}
                        onChange={e => setIdCanal(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={deletar}>Deletar</button>
            <Link to="/canais/home">
                <button className="voltar">
                    <h1 className="seta">←</h1>
                </button>
            </Link>
        </div>
    );
}
