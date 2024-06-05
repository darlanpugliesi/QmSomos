import React from "react";
import '../css/Loja.css';
import { ReactComponent as Setinha } from '../assets/setinha.svg';
import { Link } from'react-router-dom';


function Loja() {
    return (
        <div className='loja'>
            <div className='color-title'>
                <p className='titulo-page'>Painel de Exposições</p>
            </div>
            <div className='Pedro'>
                <Setinha className="setinha1"/>
                <Setinha className="setinha2"/>
                <div className='container1'>
                    <div className="imgcontainer1">
                        <img className="imagem2" src={require('../assets/imagem1.png')} alt='' width={184.06} height={176.27}/>                        
                        <Link to='/Produto1'>
                            <img className='imagem2' src={require('../assets/imagem2.png')} alt='' width={184.06} height={176.27}/>
                        </Link>
                        <img className='imagem2' src={require('../assets/imagem3.png')} alt='' width={184.06} height={176.27}/>
                        <img className='imagem2' src={require('../assets/imagem 23.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos1'>
                        <p className='titulo1'></p>
                        <p className='titulo1'></p>
                        <p className='titulo1-1'></p>
                    </div>
                    <div className='sub-titulos1'>
                        <p className='sub-titulo1'></p>
                        <p className='sub-titulo1'> </p>
                        <p className='sub-titulo1-1'> </p>
                    </div>
                </div>
                <div className='container2'>
                <div className="imgcontainer2">
                    <img className='imagem2' src={require('../assets/imagem4.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem5.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem6.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/imagem 12.png')} alt='' width={184.06} height={176.27}/>
                    </div>
                    <div className='titulos2'>
                    <p className='titulo2'></p>
                    <p className='titulo2-1'></p>
                    <p className='titulo2-2'></p>
                    </div>
                    <div className='sub-titulos2'>
                        <p className='sub-titulo2'></p>
                        <p className='sub-titulo2-1'></p>
                        <p className='sub-titulo2'></p>
                    </div>
                </div>
                <div className='container3'>
                <div className="imgcontainer3">
                    <img className='imagem2' src={require('../assets/image 7.png')} alt='' width={184.06} height={176.27}/>
                    <img className='imagem2' src={require('../assets/image 8.png')} alt='' width={184.06} height={176.27}/>
                    <img className="imagem2" src={require('../assets/image 9.png')} alt='' width={184.06} height={176.27}/>
                    <img className="imagem2" src={require('../assets/imagem 11.png')} alt='' width={184.06} height={176.27}/>
                </div>
                
                <div className='titulos3'>
                    <p className='titulo3'></p>
                    <p className='titulo3'></p>
                    <p className='titulo3-1'></p>
                </div>
                </div>
                    <div className='sub-titulos3'>
                        <p className='sub-titulo3'></p>
                        <p className='sub-titulo3'></p>
                        <p className='sub-titulo3-1'></p>
                    </div>
            </div>
        </div>
    )
}

export default Loja;