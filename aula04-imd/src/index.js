import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


//useEffect - pra usaer o componentDidMount, componentWillUnmount ... em funções
//useEffect receb uma função. Se houver alguma alteração, é chamado
 class ClockClass extends React.Component {
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

     componentWillUnmount(){ // Quando for desmontar o component. Desagendar
         clearInterval(this.timeId) //Limpa
     }

     render(){
         return (
             <div><h1>Hora: {this.state.date.toLocaleTimeString()}</h1></div>
         )
     }
 }

 function Clock2(){

  const [data, setData] = useState(new Date())

  //sem o segundo paramentro de useEffect esta atualizando de 1 em 1 segundo, mas esta usando mais memoria
  useEffect(() => {
    console.log('Chamou useEffect')
    const id = setInterval(() => setData(new Date()), 1000)

    return (() => { //retorna uma function para usar o componentWillUnmount
      clearInterval(id)
    })
    
  }, []) //Com 2° parametro, o estado que quer monitor, para poder agir. Algo que não muda

  return (
    <div>
      <h1>hello world!</h1>
      <h2>Hora: {data.toLocaleTimeString()}</h2>
    </div>
  ) 
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <>
    <ClockClass />
    <Clock2 />
  </>
</React.StrictMode>
);
  


