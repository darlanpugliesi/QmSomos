import '../css/Botao.css';
import { Link } from 'react-router-dom';

function BotaoLogin(){
    return(
       <div className='BotaoLogin'>
            <button class="yellow-button-login"><Link to="/login" className="cad-link">Login</Link></button>
        </div>
    )
}

export default BotaoLogin;