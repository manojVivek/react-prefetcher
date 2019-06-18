import React from 'react';
import './App.css';
import NetworkInspector from './components/NetworkInspector';
import NoPrefetchApp from './components/NoPrefetchApp';
import OnRenderPrefetchApp from './components/OnRenderPrefetchApp';

class App extends React.Component {
  noPrefetchRand = Math.random();
  onRenderPrefetchRand = Math.random();

  render() {
    return (
      <div className="App">
        <div className="header">
          <span className="title">Component without any Prefetching</span>
          <a
            className="code-link"
            href="https://github.com/manojVivek/react-prefetcher/blob/master/demo-app/src/components/NoPrefetchApp/index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            (see code)
          </a>
        </div>
        <div className="wrapper">
          <div className="left">
            <NoPrefetchApp rand={this.noPrefetchRand} />
          </div>
          <div className="right">
            <NetworkInspector filter={this.noPrefetchRand} />
          </div>
        </div>
        <div className="header">
          <span className="title">Component with OnRender Prefetching</span>
          <a
            className="code-link"
            href="https://github.com/manojVivek/react-prefetcher/blob/master/demo-app/src/components/OnRenderPrefetchApp/index.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            (see code)
          </a>
        </div>
        <div className="wrapper">
          <div className="left">
            <OnRenderPrefetchApp rand={this.onRenderPrefetchRand} />
          </div>
          <div className="right">
            <NetworkInspector filter={this.onRenderPrefetchRand} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
