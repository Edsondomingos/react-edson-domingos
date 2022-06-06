import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Controlando varios campos
//precisa ter um state para cada um, mas não um handle para cada um
class Form extends React.Component {

  constructor(props){
    super(props)
    this.state = {nome: 'Edson!', cor: 'branco'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const nameEvt = event.target.name //tagert(alvo) aponta para algo
    this.setState({[nameEvt]: event.target.value})
  }

  handleSubmit(event){
    alert(`O usuario de nome ${this.state.name} escolheu a cor ${this.state.value}`)
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="nome" type="text" onChange={this.handleChange} value={this.state.nome} />
        <select name="cor" value={this.state.cor} onChange={this.handleChange}>
          <option value="laranja">Laranja</option>
          <option value="branco">branco</option>
          <option value="Verde">Verde</option>
          <option value="Amarelo">Amarelo</option>
        </select>
        <input type="submit" value="Enviar!" />
      </form>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
