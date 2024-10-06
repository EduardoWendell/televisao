import { useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Consultarcanal() {
    const [listaCanais, setListaCanais] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5010/canais/';
        try {
            let resp = await axios.get(url);
            setListaCanais(resp.data);
        } catch (error) {
            console.error("Erro ao buscar canais:", error);
            alert("Erro ao buscar canais.");
        }
    }

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>
            <button onClick={buscar}>Buscar</button>
            <table>
                <thead>
                    <tr>
                        <th>ID do Canal</th>
                        <th>Nome Canal</th>
                        <th>Número do Canal</th>
                        <th>Aberto</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCanais.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.numero}</td>
                            <td>{item.aberto ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/canais/home">
                <button className="voltar">
                    <h1 className="seta">←</h1>
                </button>
            </Link>
        </div>
    );
}
