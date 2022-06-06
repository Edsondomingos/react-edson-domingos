import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Repositories from './pages/Repositories'
import Home from './pages/Home'


function Routes(props) {

  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Routes path='./repositories' component={Repositories} />
        </Switch>
    </BrowserRouter>
   
  );
}

export default Routes;
