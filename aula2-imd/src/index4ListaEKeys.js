import React from 'react';
import ReactDOM from 'react-dom/client';

//Aula listas e keys
const numbers = [1,2,3,4,5]

const listItem = numbers.map((number, index) => <li key={index}>{number}</li>)//mapear uma função para cada item

const Element = () => <ul>{listItem}</ul> //precisa de um identificador para cada item(key)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Element />
</React.StrictMode>
);
  


