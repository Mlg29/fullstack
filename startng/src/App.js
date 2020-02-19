import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Homepage from './pages/landing-page/landing-page';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={Homepage}/>
        {/* <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/>
        <Route path="/" component={Navigation}/> */}
      </Switch>
    </div>
  );
}

export default App;
