import React from 'react'
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    headerPage: {
      backgroundColor: '#e63888',
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 56
    }
  }));

export default function Header() {
    const classes = useStyles();
    
    return (
        <Paper className={classes.headerPage}>
            <img height="42" alt="Serasa" src={require('../../serasa-white.svg')} />
        </Paper>
    );
}