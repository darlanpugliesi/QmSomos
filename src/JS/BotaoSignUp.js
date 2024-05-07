import '../css/Botao.css';
import { Link } from 'react-router-dom';


function BotaoSignUp(){
    return(
        <div className='BotaoSignUp'>
            <button class="blue-button-signup"><Link to="/cadastro" className="cad-link">Cadastro</Link></button>
        </div>
    )
}

export default BotaoSignUp;