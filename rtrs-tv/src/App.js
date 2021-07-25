import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LiveWhite from './LiveTV/LiveWhite';
import LiveDark from './LiveTV/LiveDark';
import LiveWhiteV from './LiveTV/LiveWhiteV';
import LiveDarkV from './LiveTV/LiveDarkV';
import WhiteProgram from './ProgramTV/WhiteProgram';
import DarkProgram from './ProgramTV/DarkProgram';
import VideoArchive from './Archive/VideoArchive';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LiveWhite}/>
          <Route exact path="/livewhitev" component={LiveWhiteV}/>
          <Route exact path="/livedark" component={LiveDark}/>
          <Route exact path="/livedarkv" component={LiveDarkV}/>
          <Route exact path="/programwhite" component={WhiteProgram}/>
          <Route exact path="/programdark" component={DarkProgram}/>
          <Route exact path="/videoarchive" component={VideoArchive}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
