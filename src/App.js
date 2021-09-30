import React from 'react'
import { Route } from "react-router-dom";
import Localh from './components/localSotoregeTeste.jsx'
import ChatBoot from './components/chatBoot'
import FormUpdate from './components/formUpdate.jsx';

function App() {
  return (
    <>
      <Route exact path="/" component={Localh} />     
      <Route exact path="/boot" component={ChatBoot} />
      <Route exact path="/form" component={FormUpdate} />
    </>
  );
}

export default App;
