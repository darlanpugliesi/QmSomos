import React from "react";
import '../css/Loja.css';
import { ReactComponent as Setinha } from '../assets/setinha.svg'


function Loja() {
    return (
        <div className='loja'>
            <div className='color-title'>
                <h1 className='titulo-page'>Produto da nossa loja</h1>
                <h1 className="catgoria"></h1>
            </div>
            <div className='Pedro'>
             
                <div className='container1'>
                    <div className="imgcontainer1">
                        <img className="imagem2" src={require('../loja/tomate.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../loja/cenoura.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../loja/aipim.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../loja/aipim.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos1'>
                        <p className='titulo1'>Tomate</p>
                        <p className='titulo1'>Cenoura</p>
                        <p className='titulo1-1'>Aipim</p>
                        <p className='titulo1-1'>Aipim</p>
                    </div>
                    <div className='sub-titulos1'>
                        <p className='sub-titulo1'>R$ 12,90</p>
                        <p className='sub-titulo1'>R$ 12,90</p>
                        <p className='sub-titulo1-1'>R$ 12,90</p>
                        <p className='sub-titulo1-1'>R$ 12,90</p>
                    </div>
                </div>
                <div className='container2'>
                <div className="imgcontainer2">
                    <img className='imagem2' src={require('../assets/imagem4.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem5.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem6.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem6.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos2'>
                    <p className='titulo2'>Formas 2D</p>
                    <p className='titulo2-1'>Folhas</p>
                    <p className='titulo2-2'>Dama das Rosas</p>
                    <p className='titulo2-2'>Dama das Rosas</p>

                    </div>
                    <div className='sub-titulos2'>
                        <p className='sub-titulo2'>Decoração de arte abstrata.</p>
                        <p className='sub-titulo2-1'>Decoração de folhas.</p>
                        <p className='sub-titulo2'>Decoração feminina de rosas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loja;