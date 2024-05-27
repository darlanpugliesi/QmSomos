import Imagem from "./Imagem";
import Texto1 from "./Texto1";
import BotaoLogin from "./BotaoLogin";
import BotaoSignUp from "./BotaoSignUp";
import '../css/home.css'


function Home(){
    return(
            <div className="Home">
                <Imagem/>
                <Texto1/>
                <BotaoLogin/>
                <BotaoSignUp/>
            </div>
    )
}
    
export default Home;