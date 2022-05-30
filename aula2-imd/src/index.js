import React from 'react';
import ReactDOM from 'react-dom/client';

 class Toggle extends React.component {
     constructor(props){
        super(props)
        this.state = {isToggleOn: false}
        this.handleClick = this.handleClick.bind(this) //Di que o di usado é o mesmo da classe
     }

     componentDidMount(){ //Quando monta
         this.timeId = setInterval(() => {
             this.setState({date: new Date()})
         }, 1000)
     }

     componentWillUnmount(){ // Quando desmontar
         clearInterval(this.timeId)
     }

     handleClick()){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        })) //prevState - estado anterior
     }

     render(){
         return (
             <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
             //<button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> // Usando arrow function não prcisa defir o this no construtor
         )
     }
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Toggle />
</React.StrictMode>
);
  


