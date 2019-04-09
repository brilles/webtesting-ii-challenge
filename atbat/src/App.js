import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard.js';
import Display from './Display/Display.js';

class App extends Component {
  state = {
    ballCount: 0,
    strikeCount: 0,
    outsCount: 0
  };

  render() {
    return (
      <div className="App">
        <h1>At bat</h1>
        <Display
          ballCount={this.state.ballCount}
          strikeCount={this.state.strikeCount}
          outsCount={this.state.outsCount}
        />
        <Dashboard
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }

  componentDidUpdate() {
    const { strikeCount, ballCount, outsCount } = this.state;
    if (strikeCount === 3 || ballCount === 4) {
      this.setState({ outsCount: outsCount + 1 });
      this.setState({ ballCount: 0, strikeCount: 0 });
    }
  }

  strike = () => {
    const { strikeCount } = this.state;
    this.setState({ strikeCount: strikeCount + 1 });
  };

  ball = () => {
    const { ballCount } = this.state;
    this.setState({ ballCount: ballCount + 1 });
  };

  foul = () => {
    const { strikeCount } = this.state;
    if (strikeCount < 2) {
      this.setState({ strikeCount: strikeCount + 1 });
    }
  };

  hit = () => {
    this.setState({ ballCount: 0, strikeCount: 0 });
  };
}

export default App;
