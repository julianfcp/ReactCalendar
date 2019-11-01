import React, { Component } from "react";
import { getNumberOfDaysInMonth, getDayInMonth } from '../services';
import { withStyles } from '@material-ui/core/styles';
import  Modal  from '@material-ui/core/Modal';
import  Fade  from '@material-ui/core/Fade';
import  Backdrop  from '@material-ui/core/Backdrop';
import './styles.css'

const styles = theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    paper: {
        border: '2px solid #000',
    },
  });



class Month extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            counter: 0,
            year: this.props.year, // Recibo el anio desde Calendar
            month: this.props.monthNumber, // Recibo el numero del mes desde Year
            open: false,
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
        var numberDays = getNumberOfDaysInMonth(this.state.month, this.state.year);
        var weekDay = getDayInMonth(this.state.year, this.state.month);
        console.log("Dia", weekDay);
        console.log("Numero de Dias: ",numberDays);
        this.fillMonthRows(weekDay, numberDays, this.state.month);
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
        // this.fillMonthColumns(i, weekDay, numberDays, counterDay)[0] -> primera posicion de retorno
        // counterDay = this.fillMonthColumns(i, weekDay, numberDays,counterDay)[1] -> segunda posicion de retorno
        // retorno viene de la funcion que pinta las columnas (abajo)
        // actualiza el state.rows el cual es la cuadrilla de cada mes
        this.setState({rows: rows}, function(){
            //console.log(this.state.rows);
        });
        
    }
    fillMonthColumns = (i, weekDay, numberDays, counterDay) => {
        var cols = [];
        var retorno = [];
        
        cols = new Array(7).fill(0).map( ( zero, arrayCounter ) => {
            if((i === 0 && arrayCounter < weekDay) || numberDays < counterDay+ 1) {
                return(<td id={arrayCounter} key={arrayCounter}>&nbsp;</td>);
            }else{
            // e.target.id obedece al event listener id devuelve el id a la funcion handleDays
                return (
                    counterDay ++,
                    <td 
                        id={this.state.month+'-'+counterDay} 
                        key={this.state.month+counterDay} 
                        onClick={(e) => this.handleDays(e.target.id)}>
                        {counterDay}
                    </td>)
                }
            }
        )
        retorno = [cols, counterDay];
        return retorno;
    }

    // When press a day
    handleDays = (targetId) => {

        document.getElementById(targetId).style.background = 'gray';
        this.handleOpen();

    }

    handleOpen = () => {
        this.setState({open: true});
    };
    
    handleClose = () => {
        this.setState({open: false});
    };

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
                <Modal
                    className={styles.modal}
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeaftertransition="true"
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={this.state.open} timeout={10}>
                    <div className="modalPaper">
                        <input className="modalTitle" type="text" placeholder="Add event title"/>
                        <p className="modalContent"> react-transition-group animates me.</p>
                    </div>
                    </Fade>
                </Modal>
           </div>
           
        );
    }


}

export default withStyles(styles)(Month);