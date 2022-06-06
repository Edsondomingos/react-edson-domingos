import React from 'react';
import ReactDOM from 'react-dom/client';

 class ClockClass extends React.component {
     constructor(props){
        super(props)
        this.state = {date: new Date()} //Quando construir o estado vai ter um objeto chamado date
     }

     componentDidMount(){ //Quando termina de ser montadp
        //setInterval retorna um id. Nesse caso foi armazenado no timeId
         this.timeId = setInterval(() => { //setState é quem modifica(seta) o valor
             this.setState({date: new Date()}) //Atualiza o objeto state.date
         }, 1000)
     }

     componentWillUnmount(){ // Quando for desmontar o component
         clearInterval(this.timeId) //Limpa
     }

     render(){
         return (
             <div><h1>Hora: {this.state.date.toLocaleTimeString()}</h1></div>
         )
     }
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <ClockClass />
</React.StrictMode>
);
  


