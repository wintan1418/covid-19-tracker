import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';
import styles from './cards.module.css'

const Cards = (props) => {
 
 console.log(props);

  return (
   <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Cards}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected-people</Typography>
            <Typography variant="h5">REAL DATE</Typography>
            <Typography color="textSecondary">Real Data</Typography>
            <Typography variant="body2">Number of active Covid-19 cases</Typography>
          </CardContent>
         
         </Grid> 
      </Grid>
   </div>
   
  )
}

export default Cards;