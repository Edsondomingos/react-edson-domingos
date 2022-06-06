import React, {useState} from 'react'
import axios from 'axios'


function Home(props) {

  const [usuario, setUsuario] = useState('') //O estado deve ser a unica fonte de verdade
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }

  return (
    
    <>
      <input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default Home;
