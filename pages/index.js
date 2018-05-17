import React, { Component } from 'react';
// import logo from '../static/logo.svg';
import WorkerPool from '../workerPool2';

class App extends Component {

  constructor(props) {
    super(props);
    this.wp = new WorkerPool(2);
  }

  success = e => console.log(e)

  failure = e => console.log('random failure:', e.message)

  meh = () => { 
    console.log('meh')
    this.wp.queueJob('meh', [ 'who cares?' ]).then(this.success).catch(this.failure) 
  }

  hello = () => { 
    console.log('hello')
    this.wp.queueJob('hello', [ 'i love you' ]).then(this.success).catch(this.failure) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Demonstration of React-ready web worker pool
        </p>
        <p>
          <button onClick={this.meh}>try printing 'meh' to console</button>
        </p>
        <p>
          <button onClick={this.hello}>try printing 'hello' to console</button>
        </p>
        <style jsx>{`
          .App {
            text-align: center;
          }

          .App-logo {
            animation: App-logo-spin infinite 20s linear;
            height: 80px;
          }

          .App-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
            color: white;
          }

          .App-title {
            font-size: 1.5em;
          }

          .App-intro {
            font-size: large;
          }

          @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          `}</style>
      </div>
    );
  }
}

export default App;
