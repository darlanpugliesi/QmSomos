import React from 'react';
import '../css/Sobre.css';

function Sobre() {
    return (
            <div className='Sobre'>
                <h1 className='titulo'>Nosso Objetivo</h1>
                <div className='subtitulo'>
                    <p>Este projeto, desenvolvido por estudantes do ensino médio técnico, tem como objetivo combater e prestar suporte às artistas que têm seus trabalhos considerados como inferiores, tanto em divulgação quanto em relevância diante das exposições de autoria majoritariamente masculina.<br/><br></br>
                    Portanto, com esta plataforma pretendemos sanar 3 problemáticas:<br></br>
    A falta de espaço para que mulheres mostrem seu trabalho e sejam levadas a sério;
    A falta de suporte tanto social quanto técnico para que estas possam viver da exposição artística
    A ausência de uma comunidade de apoio, no sentido profissional e pessoal, para que possamos lhes prestar o máximo de apoio possível.</p>
                </div>

                <div className='imgmacaco'>
                    <img className='imgmacacoco' src={require('../assets/macaco.png')} width={600}></img>
                </div>
                <div className='containerblack'>
                    <img className='imgmulherubanda' src={require('../assets/Mulher - quem somos.png')}></img>
                    <img className='flor' src={require('../assets/flor-quem somos.png')}></img>
                </div>
                    <div className='lowcontainer'>
                        <h1 className='lowtitulo'>Inspirações</h1>
                        <div className='descContainer'>
                            <h3 className='name'>GUERRILLA GIRLS</h3>
                            <h4 className='subname'>Um coletivo de artistas femininas que utiliza a arte para promover a igualdade de gênero nas artes visuais.</h4>
                            <h3 className='name'>Women Artists Archives National Directory (WAAND)</h3>
                            <h4 className='subname'>Uma base de dados online que oferece informações sobre artistas mulheres, especialmente aquelas que contribuíram para o movimento feminista.</h4>
                            <h3 className='name'>The Art History Babes</h3>
                            <h4 className='subname'>Um podcast e plataforma online dedicada a tornar a história da arte mais acessível e inclusiva, incluindo um foco em artistas sub-representadas.</h4>
                        </div>
                    </div>
             </div>
    )
}

export default Sobre;