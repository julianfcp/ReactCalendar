import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './styles.css';





class NavBar extends Component {
    
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography  variant="title" color="inherit">
                        
                    </Typography>
                    <table className="calendarTitle">
                        <tbody>
                            <tr>
                                <td onClick={this.props.buttonClickL}>
                                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 18 18">
                                    <path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>
                                </td>
                                <td>    
                                    <span>Calendar - {this.props.year}</span>
                                </td>
                                <td onClick={this.props.buttonClickR}>
                                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 18 18">
                                    <path d="M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;