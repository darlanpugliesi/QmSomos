import Imagem from "./Imagem";
import Texto1 from "./Texto1";
import BotaoLogin from "./BotaoLogin";
import BotaoSignUp from "./BotaoSignUp";
import Layout from './Layout';

function Home(){
    return(
        <Layout>
            <div className="Home">
                <Imagem/>
                <Texto1/>
                <BotaoLogin/>
                <BotaoSignUp/>
            </div>
        </Layout>
    )
}
    
export default Home;