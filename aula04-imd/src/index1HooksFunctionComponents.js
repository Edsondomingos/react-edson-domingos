import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Hook - implementa estado(state) nos componentes funções, pois apenas as classes possuem
//Não esquecer de importar os hooks que serão usados
function Toggle(props){
  // usando desctructor
  const [toggle, setToggle] = useState(true) //Hook//toggle(preState?) é o estado anterior e a setToggle função que altera(setState)

  return <button onClick={() => setToggle(!toggle)}>{toggle?'ON':'OFF'}</button>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toggle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
