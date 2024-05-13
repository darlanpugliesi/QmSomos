import React from "react";
import '../css/Loja.css';
import { ReactComponent as Setinha } from '../assets/setinha.svg'


function Loja() {
    return (
        <div className='loja'>
            <div className='color-title'>
                <h1 className='titulo-page'>Painel de Exposições</h1>
            </div>
            <div className='Pedro'>
                <Setinha className="setinha1"/>
                <Setinha className="setinha2"/>
                <div className='container1'>
                    <div className="imgcontainer1">
                        <img className="imagem2" src={require('../assets/imagem1.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../assets/imagem2.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../assets/imagem3.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos1'>
                        <p className='titulo1'>Gatinho</p>
                        <p className='titulo1'>Flor</p>
                        <p className='titulo1-1'>Formas</p>
                    </div>
                    <div className='sub-titulos1'>
                        <p className='sub-titulo1'>Decoração de gatinho.</p>
                        <p className='sub-titulo1'>Quadro de Flor decorativa.</p>
                        <p className='sub-titulo1-1'>Decoração de arte abstrata.</p>
                    </div>
                </div>
                <div className='container2'>
                <div className="imgcontainer2">
                    <img className='imagem2' src={require('../assets/imagem4.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem5.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem6.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos2'>
                    <p className='titulo2'>Formas 2D</p>
                    <p className='titulo2-1'>Folhas</p>
                    <p className='titulo2-2'>Dama das Rosas</p>
                    </div>
                    <div className='sub-titulos2'>
                        <p className='sub-titulo2'>Decoração de arte abstrata.</p>
                        <p className='sub-titulo2-1'>Decoração de folhas.</p>
                        <p className='sub-titulo2'>Decoração feminina de rosas</p>
                    </div>
                </div>
                <div className='container3'>
                <div className="imgcontainer3">
                    <img className='imagem2' src={require('../assets/imagem7.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem8.png')} alt='' width={184.06} height={176.27}/>
                    <img className="imagem2" src={require('../assets/imagem9.png')} alt='' width={184.06} height={176.27}/>
                </div>
                
                <div className='titulos3'>
                    <p className='titulo3'>Gatinho</p>
                    <p className='titulo3'>Estátua Empoderada</p>
                    <p className='titulo3-1'>Estátua Feminina</p>
                </div>
                </div>
                    <div className='sub-titulos3'>
                        <p className='sub-titulo3'>Decoração de rosas</p>
                        <p className='sub-titulo3'>Escultura nórdica feminina</p>
                        <p className='sub-titulo3-1'>Escultura grega feminina</p>
                    </div>
            </div>
            <div className='low-container'>
                <img className='flor' src={require('../assets/flor-loja.png')} alt='' width={297.99} height={467.99}/>
                <img className='mulher-loja' src={require('../assets/mulher-loja.png')} alt='' width={283} height={445}/>
            </div>
        </div>
    )
}

export default Loja;