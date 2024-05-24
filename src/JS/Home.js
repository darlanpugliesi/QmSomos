import Imagem from "./Imagem";
import Texto1 from "./Texto1";
import BotaoLogin from "./BotaoLogin";
import '../css/home.css'


function Home(){
    return(
            <div className="Home">
                <div className="greenco">
                </div>
                <div className="yellowco">
                </div>
                <Imagem/>
                <Texto1/>
                <BotaoLogin/>
                
            </div>
    )
}
    
export default Home;