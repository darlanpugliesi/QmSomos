import React from 'react';
import '../css/QmSomos.css';
import Layout from './Layout';
import Footer from './footer';


function QmSomos() {
    return (
        <Layout className='footer'>
            <div className='QmSomos'>
                <h1 className='titulo'>Nosso Objetivo</h1>
                <div className='subtitulo'>
                    <p>Este projeto, desenvolvido por estudantes do ensino médio técnico, tem como objetivo combater e prestar suporte às artistas que têm seus trabalhos considerados como inferiores, tanto em divulgação quanto em relevância diante das exposições de autoria majoritariamente masculina.<br/><br></br>
                    Portanto, com esta plataforma pretendemos sanar 3 problemáticas:<br></br>
    A falta de espaço para que mulheres mostrem seu trabalho e sejam levadas a sério;
    A falta de suporte tanto social quanto técnico para que estas possam viver da exposição artística
    A ausência de uma comunidade de apoio, no sentido profissional e pessoal, para que possamos lhes prestar o máximo de apoio possível.</p>
                </div>

                <div className='imgmacaco'>
                    <img className='imgmacacoco' src={require('../assets/macaco.png')} width={500}></img>
                </div>
                <div className='containerblack'>

                    <img className='imgmulherubanda' src={require('../assets/Mulher - quem somos.png')}></img>
                    <img className='flor' src={require('../assets/flor-quem somos.png')}></img>
                    <div className='lowcontainer'>
                        <h1 className='lowtitulo'>Inspirações</h1>
                    </div>
                </div>
             </div>
            </Layout>
    )
}

export default QmSomos;