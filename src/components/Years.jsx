import React, { Component } from 'react';
import Month from './Month';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './styles.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



class Years extends Component {

  render () {
    const { classes, year } = this.props;

    return (
      <div className={classes.root}>
        <div className="gridCont">
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Month monthName="January" monthNumber="01" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="February" monthNumber="02" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="March" monthNumber="03" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="April" monthNumber="04" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="May" monthNumber="05" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="June" monthNumber="06" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="July" monthNumber="07" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="August" monthNumber="08" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="September" monthNumber="09" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="October" monthNumber="10" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="November" monthNumber="11" year={year}/>
          </Grid>
          <Grid item xs={3}>
            <Month monthName="December" monthNumber="12" year={year}/>
          </Grid>

        </Grid>
        </div> 
      </div>
    );
  }
}

Years.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Years);
