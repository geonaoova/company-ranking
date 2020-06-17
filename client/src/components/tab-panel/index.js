import React from "react";
import PropTypes from 'prop-types';
import { Typography, Box, Container, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  containerTab: { 
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%',
    backgroundColor: '#FFF',
    marginTop: 2
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container maxWidth="md" className={classes.containerTab}>
          <Box p={3}>
            <Typography component={'span'} >{children}</Typography>
          </Box>
        </Container>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
