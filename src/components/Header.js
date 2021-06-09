import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appHeader: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor:'#40e0d0',
    color: 'white',
  },
}));

const Headers= ()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
                            
          <Paper className={classes.appHeader}>
              <Typography>New Start Here</Typography><ArrowForwardIcon/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Headers;