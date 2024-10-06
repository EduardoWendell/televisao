import "./App.scss"
import { Link } from "react-router-dom";

 export default function Homecanal() {
  return (
        <div>
          <div className="titulo">
          <h1>Canais</h1>
          </div>
          <div className='cabeca'>
            <Link to='/canais/cadastrar'>
              <div>
                   <button><h1>Cadastrar</h1></button> 
              </div>


            </Link>
               <Link to='/canais/consultar'>
               <div>
                <button><h1>Consultar</h1></button> 
                </div>
            </Link> 
               

            <Link to ="/canais/deletar">
                <div>
                    <button><h1>Deletar</h1></button> 
                </div>
            </Link>
          
          <Link to="/canais/alterar">
                <div>
                <button><h1>Alterar</h1></button> 
                </div>
          </Link>
            </div>
            <Link to="/"> 
            <button className="voltar">
        <h1 className="seta">←</h1>
    </button>
            </Link>
           
        </div>
        
      );
    }