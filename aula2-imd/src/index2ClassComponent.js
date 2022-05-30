import React from 'react';
import ReactDOM from 'react-dom/client';

 class ClockClass extends React.component {
     constructor(props){
        super(props)
        this.state = {date: new Date()}
     }

     componentDidMount(){ //Quando monta
         this.timeId = setInterval(() => {
             this.setState({date: new Date()})
         }, 1000)
     }

     componentWillUnmount(){ // Quando desmontar
         clearInterval(this.timeId)
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
  


