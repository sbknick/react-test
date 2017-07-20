import * as React from "react";
// import logo from './logo.svg';
import "./App.css";


const logo = require("./logo.svg") as string; // tslint:disable-line

export class App extends React.Component<{}, {}>
{
  public render()
  {
    const text = "To get started, edit <code>src/App.js</code> and save to reload. Hot reloading check.";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" dangerouslySetInnerHTML={{ __html: text }}>
        </p>
      </div>
    );
  }
}

export default App;
