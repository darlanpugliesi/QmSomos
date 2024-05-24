import '../App.css';

function Imagem(){
    return (
        <div className='Imagem'>
            <img src={require('../assets/maracuja.png')} alt="mulher" width={620}/>
        </div>
    )
}

export default Imagem