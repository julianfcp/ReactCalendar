import React, { Component } from "react";
import './styles.css';


const getNumberOfDaysInMonth = (month, year) =>  {
    // devuelve el numero de dias de un mes
    return new Date(year, month, 0).getDate();
  };
const getDayInMonth = (year,month) => {
    return new Date(year+'-'+month+'-'+'01').getDay();
}


class Month extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            counter: 0,
            year: this.props.year,
            month: this.props.monthNumber,
        };
        var numberDays = getNumberOfDaysInMonth(this.state.month, this.state.year);
        var weekDay = getDayInMonth(this.state.year, this.state.month);
        console.log(weekDay);
        console.log(this.state.counter);
        this.fillMonthRows(weekDay, numberDays);

    }
    refreshYear = () => {
        return alert("Refreshing..");
    }
    fillMonthRows = (weekDay, numberDays) => {
        console.log("called");
        var rows = [];
        
        for (var i = 0; i < 6; i++) {
            rows.push(
            <tr key={i}>
                {this.fillMonthColumns(i, weekDay, numberDays)}
            </tr>
            );
        }
        this.state = {rows: rows};
    }
    fillMonthColumns = (i, weekDay, numberDays) => {
        var cols = [];
        var topDayCounter = this.state.counter + 1;
        for (var j=0; j<7; j++) {
            if((i === 0 && j < weekDay) || numberDays < this.state.counter + 1) {
                cols.push(<td key={j}>&nbsp;</td>);
            }
            else {
                this.state.counter = topDayCounter++;
                cols.push(<td onClick={this.handleDays} key={j}>{this.state.counter}</td>); 
            }
            
            
        }
        
        return cols;
    }

    handleDays = () => {
        alert("perrita");
    }

    render() {
        const {rows} = this.state;
        return (
            <div>
                <span className="monthTitle" >{this.props.monthName}</span>
                <table className="Calendar">
                    <thead>
                        <tr>
                            <th abbr="Sunday" title="Sunday">Su</th><th abbr="Monday" title="Monday">Mo</th><th abbr="Tuesday" title="Tuesday">Tu</th><th abbr="Wednesday" title="Wednesday">We</th><th abbr="Thursday" title="Thursday">Th</th><th abbr="Friday" title="Friday">Fr</th><th abbr="Saturday" title="Saturday">Sa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
           </div>
        );
    }


}

export default Month;