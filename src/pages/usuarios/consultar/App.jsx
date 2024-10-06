import { useState } from 'react';
import './App.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Consultarusuario() {
    const [listausuario, setListausuario] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5010/usuario/';
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            setListausuario(resp.data);
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            alert("Erro ao buscar usuário.");
        }
    }

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>
            <button onClick={buscar}>Buscar</button>
            <table>
                <thead>
                    <tr>
                        <th>ID do Usuário</th>
                        <th>Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {listausuario.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/usuarios/home">
                <button className="voltar">
                    <h1 className="seta">←</h1>
                </button>
            </Link>
        </div>
    );
}
