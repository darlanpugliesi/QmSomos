import React from "react";
import '../css/perfil.css'

function Perfil() {
    return (
        <div className='perfil'>
            <div className='container-upper'>
                <img className='fundo-upper' src={require('../assets/fundo-perfil.png')}></img>
            </div>
        </div>
    )
}

export default Perfil;