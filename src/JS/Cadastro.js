import React from 'react';
import '../css/cadastro.css';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      username: '',
      password: '',
      confirmaPassword: '',
      dataNascimento: '',
      errorMessage: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      errorMessage: ''
    });
  }

  isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordPattern.test(password);
  }

  isValidDate = (date) => {
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!datePattern.test(date)) return false;
    const [day, month, year] = date.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const minBirthDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate()); // 120 anos atrás
    return parsedDate instanceof Date && !isNaN(parsedDate) && parsedDate <= currentDate && parsedDate >= minBirthDate;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { nome, sobrenome, username, password, confirmaPassword, dataNascimento } = this.state;

    if (password !== confirmaPassword) {
      this.setState({ errorMessage: 'As senhas não coincidem.' });
      return;
    }

    if (!this.isValidPassword(password)) {
      this.setState({ errorMessage: 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, e ter no mínimo 8 caracteres.' });
      return;
    }

    if (!this.isValidEmail(username)) {
      this.setState({ errorMessage: 'Por favor, insira um e-mail válido.' });
      return;
    }

    if (!this.isValidDate(dataNascimento)) {
      this.setState({ errorMessage: 'Por favor, insira uma data de nascimento válida.' });
      return;
    }

    try {

      this.setState({
        nome: '',
        sobrenome: '',
        username: '',
        password: '',
        confirmaPassword: '',
        dataNascimento: '',
        errorMessage: ''
      });

    } catch (error) {
      this.setState({ errorMessage: 'Ocorreu um erro ao processar o cadastro. Por favor, tente novamente.' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-cadastro'>
        <div className='realizecadastro'>
          <h2 className='titulo-cadastro'>REALIZE O SEU CADASTRO!</h2>
        </div>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          placeholder="Nome" 
          required 
          value={this.state.nome} 
          onChange={this.handleInputChange}
          className='form-item'
        />
        <br />
        <input 
          type="text" 
          id="sobrenome" 
          name="sobrenome" 
          placeholder="Sobrenome" 
          required 
          value={this.state.sobrenome} 
          onChange={this.handleInputChange}
          className='form-item'
        />
        <br />
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Email" 
          required 
          value={this.state.username} 
          onChange={this.handleInputChange}
          className='form-item'
        />
        <br />
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Senha" 
          required
          value={this.state.password} 
          onChange={this.handleInputChange}
          className='form-item' 
        />
        <br />
        <input 
          type="password" 
          id="confirmaPassword" 
          name="confirmaPassword" 
          placeholder="Confirme a Senha" 
          required
          value={this.state.confirmaPassword} 
          onChange={this.handleInputChange} 
          className='form-item'
        />
        <br />
        <input 
          type="text" 
          id="dataNascimento" 
          name="dataNascimento" 
          placeholder="Data de Nascimento (DD/MM/AAAA)" 
          required 
          value={this.state.dataNascimento} 
          onChange={this.handleInputChange}
          className='form-item'
        />
        <br/>
        {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
        <br />
        <input className='form-submit-cadastro' type="submit" value="Cadastrar" />
      </form>
    );
  }
}

export default Cadastro;
