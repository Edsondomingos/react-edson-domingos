import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Controlled Components - Garante que o controle é total do component - unica fonte de verdade
class Form extends React.Component {

  constructor(props){
    super(props)
    this.state = {value: 'branco'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert('Um novo evento foi enviado: ' + this.state.value)
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
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
