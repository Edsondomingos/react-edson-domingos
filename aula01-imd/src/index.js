import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


function Welcome(props){
  return <h1>Hello World! {props.name}</h1>
}

function App(){
  return(<div>
      <Welcome name="Edson" />
      <Welcome name="Ingrid" />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/* Espera um unico componente */}
    <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
