import React, { Component } from "react";
import './styles.css';


class Month extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            counter: 0,
            year: this.props.year, // Recibo el anio desde Calendar
            month: this.props.monthNumber, // Recibo el numero del mes desde Year
        };

    }
    componentDidMount(weekDay, numberDays) {
        console.log('GrandChild did mount.');
        this.fetchCalendar();
    }

    componentDidUpdate(prevProps) {
        // used when year changes
        if (this.props.year !== prevProps.year) {
            console.log("Year Updated");
            console.log(this.state.rows);
            this.setState ({
                //rows: [],
                counter: 0,
                year: this.props.year, // Recibo el anio desde Calendar
                month: this.props.monthNumber, // Recibo el numero del mes desde Year
            }, function(){ //callback function, para asegurar la actualizacion del state
                this.fetchCalendar();
            });
            
        }
    }
    
    fetchCalendar() {
        // las siguientes variables usan this.get... ya que las funciones estan dentro de la clase
        var numberDays = this.getNumberOfDaysInMonth(this.state.month, this.state.year);
        var weekDay = this.getDayInMonth(this.state.year, this.state.month);
        console.log("Dia", weekDay);
        console.log("Numero de Dias: ",numberDays);
        this.fillMonthRows(weekDay, numberDays, this.state.month);
    }

    getNumberOfDaysInMonth = (month, year) =>  {
        // devuelve el numero de dias de un mes
        return new Date(year, month, 0).getDate();
    };

    getDayInMonth = (year,month) => {
        // devuelve el numero del primer dia del mes
        return new Date(year+','+month).getDay();
    }

    fillMonthRows = (weekDay, numberDays, month) => {
        console.log("Month: ", month);
        var rows = [], counterDay = 0;
        
        for (var i = 0; i < 6; i++) {
            rows.push(
            <tr id={month} key={i}>
                {this.fillMonthColumns(i, weekDay, numberDays, counterDay)[0]}
            </tr>
            );
            counterDay = this.fillMonthColumns(i, weekDay, numberDays,counterDay)[1];
        }
        // actualiza el state.rows el cual es la cuadrilla de cada mes
        this.setState({rows: rows}, function(){
            //console.log(this.state.rows);
        });
        
    }
    fillMonthColumns = (i, weekDay, numberDays, counterDay) => {
        var cols = [];
        var retorno = [];
        var actualRow = i;
        /*
        for (var j=0; j<7; j++) {
            if((i === 0 && j < weekDay) || numberDays < counterDay+ 1) {
                cols.push(<td key={j}>&nbsp;</td>);
            }
            else {
                counterDay = topDayCounter++;
                cols.push(<td id={this.state.month+'day-'+counterDay} onClick={this.handleDays} key={'day-'+j}>{counterDay}</td>);
            }
        }*/
        
        cols = new Array(7).fill(0).map( ( zero, arrayCounter ) => {
            
            if((i === 0 && arrayCounter < weekDay) || numberDays < counterDay+ 1) {
                return(<td id={arrayCounter} key={arrayCounter}>&nbsp;</td>);
            }else{
            
                return (
                    counterDay ++,
                    <td 
                        id={this.state.month+counterDay} 
                        key={this.state.month+counterDay} 
                        onClick={() => this.handleDays(actualRow,counterDay)}>
                        {counterDay}
                    </td>)
                }
            }
        )

        retorno = [cols, counterDay];
        return retorno;
    }

    // When press a day
    handleDays = (actualRow,counterDay) => {
        
        alert(actualRow+'-'+counterDay);
        //alert(this.state.month+counterDay);

        //alert(document.getElementById("Month").rows[actualRow].cells[3].innerHTML);
        //document.getElementById(this.state.month+counterDay).style.background = 'gray';

        


    }

    render() {
        const {rows} = this.state; // Destructuring:  rows => this.state.rows
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