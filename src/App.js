import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Years from './components/Years';
import './App.css';

class App extends Component {
  constructor() {
    super();
    var today = new Date();
    var currentYear = today.getFullYear();
    this.state = {
        year: currentYear,
    }
  }
  changeYearL = () => {
    this.setState({year: this.state.year - 1});
    console.log(this.state.year);
  }
  changeYearR = () => {
    this.setState({year: this.state.year + 1});
    console.log(this.state.year);
  }

  render() {
    return (
      <div className="App">
        <NavBar year={this.state.year} buttonClickL={this.changeYearL.bind(this)} buttonClickR={this.changeYearR.bind(this)} />
        <Years year={this.state.year}/>
      </div>
    );
  }
}

export default App;
