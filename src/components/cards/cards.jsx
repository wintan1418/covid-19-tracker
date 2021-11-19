import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import { StylesContext } from '@material-ui/styles';
import styles from './cards.module.css'

const Cards = (props) => {
 
 console.log(props);

  return (
   <div className={styles.container}>
      <h1>cards</h1>
   </div>
   
  )
}

export default Cards;