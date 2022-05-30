import React from 'react';
import ReactDOM from 'react-dom/client';

function Clock(props){
  const element = (
    <div><h1>Hora: {props.date.toLocaleTimeString()}</h1></div>
  )
  return element
}

function tick(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Clock date={new Date()}/>
    </React.StrictMode>
  );
  
}

setInterval(tick,1000)

