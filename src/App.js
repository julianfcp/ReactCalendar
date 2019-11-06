import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Calendar from './components/Calendar';
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
  // Los siguientes metodos son llamados mediante el parametro
  // buttonClick y .bind(this)
  changeYearL = () => {
    this.setState({year: this.state.year - 1});
    console.log(this.state.year);
  }
  changeYearR = () => {
    //this.state.year = this.state.year + 1;
    this.setState({year: this.state.year + 1});
    console.log(this.state.year, "R");
  }

  render() {
    
    return (
      <div className="App">
      <NavBar year={this.state.year} buttonClickL={this.changeYearL.bind(this)} buttonClickR={this.changeYearR.bind(this)} />
      <Calendar  year={this.state.year}/>
      </div>
    );
  }
}

export default App;
