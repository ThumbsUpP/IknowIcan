import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ViewCarousel from '@material-ui/icons/ViewCarousel';
import Favorite from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';

import styled from 'styled-components';

const styles = {
  root: {
    width: '100vw',
    height: '10vh'
  },
  icon: {
    width: '1.3em',
    height: '2em'
  },
  iconBox :{
    border: '1px solid #d3d3d345'
  }

};

const BtNav = styled.div`
position : fixed; 
width : 100%;
height: 10vh;
bottom: 0;
`

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.onNavChange(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BtNav>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction className={classes.iconBox} icon={<ViewCarousel className={classes.icon}/>} />
          <BottomNavigationAction className={classes.iconBox} icon={<Favorite className={classes.icon}/>} />
          <BottomNavigationAction className={classes.iconBox} icon={<AccountCircle className={classes.icon}/>} />
        </BottomNavigation>
      </BtNav>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);