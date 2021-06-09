import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import Imagep2 from '../../src/latchu.jpg'

import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBanner:{
    height:'200px',
   // backgroundImage:`url(${Imagep2})`
  }
});

const itemList=[
  
    {
      img: 'https://images.unsplash.com/photo-1580640611343-3f53b12a5b1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcGluZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      title: 'Mushrooms',
    }
  
]

const Landing=()=>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <NavBar></NavBar>       
                          
      </Grid>

      <Grid item xs={12}>


      {itemList.map((item) => (
            <Card className={classes.root}>
            <CardMedia
             style = {{ height: '300px'}}
            className={classes.media}
            image= {item.img}
            title="plcae holder"
          />
         
        </Card>

      ))}

    
    
                      
      </Grid>
      </Grid>
    </div>
  );
}

export default Landing;



