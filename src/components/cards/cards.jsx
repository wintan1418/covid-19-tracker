import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
// import { StylesContext } from '@material-ui/styles';
import styles from './cards.module.css'
import CountUp from 'react-countup';

const Cards = ({ data:{confirmed, recovered,deaths,lastUpdate}}) => {

  if(!confirmed){
    return 'loading....';
  }
  return (
   <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected-people</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} seperator="," />
            </Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">Number of active Covid-19 cases</Typography>
          </CardContent>
         </Grid> 
         <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">REAL DATE</Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">Number of deaths</Typography>
          </CardContent>
         </Grid> 
         <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">Number of recovered</Typography>
             <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">Number of active Covid-19 cases</Typography>
          </CardContent>
         </Grid> 
      </Grid>
   </div>
  );
}


export default Cards;