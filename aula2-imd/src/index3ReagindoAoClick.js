import React from 'react';
import ReactDOM from 'react-dom/client';

//Aula reagindo ao usuario
 class Toggle extends React.Component {
     constructor(props){
        super(props)
        this.state = {isToggleOn: false} //isToggleOn - nome aleatorio
        this.handleClick = this.handleClick.bind(this) //Diz que o this usado é o mesmo da classe la no handleClick
     }

     handleClick(){
        this.setState(prevState => ({  //precState(estado anterior) - muda o estado de acordo com o anterior
            isToggleOn: !prevState.isToggleOn
        }))
     }

     render(){
         return (
             <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
             //<button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> // Usando arrow function não prcisa definir o this no construtor
         )
     }
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Toggle />
</React.StrictMode>
);
  


