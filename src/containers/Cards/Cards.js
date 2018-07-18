import React, { Component } from "react";
import Swipeable from "react-swipy"
import Card from "../../components/Card/Card";
import styled from 'styled-components';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';
//import Button from "./components/Button";

const WrapperStyles = styled.div`
position: relative;
width: 100vw;
height: 90vh;
display: flex;
justify-content: center;`

const ActionsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10vh;
  width: 100%;
  height: 23vh;
  background: linear-gradient(#ffffff00, #00000036);
  position: fixed;
`
const styles = {
    left: {
      fill :'tomato'
    },
    right: {
      fill :'lightSeaGreen'
    },
    icon: {
      width: '1.3em',
      height: '1.3em',
      background: '#ffffff70',
      borderRadius: '50%',
      padding: "1rem",
      margin: '1.3rem'
    },
  };


class Cards extends Component {
  state = {
    cards: ["First", "Second", "Third"],
  };

  

  remove = () =>
    this.setState(({ cards }) => ({
      cards: cards.slice(1, cards.length),
    }));

  render() {
    const { cards } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <WrapperStyles>
          {cards.length > 0 ? (
            <WrapperStyles>
              <Swipeable
                buttons={({ left, right }) => (
                  <ActionsStyles>
                    <ThumbDown className={classes.icon} style={{fill :'tomato'}} onClick={left}></ThumbDown>
                    <ThumbUp className={classes.icon} style={{fill :'lightSeaGreen'}} onClick={right}></ThumbUp>
                  </ActionsStyles>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </WrapperStyles>
          ) : (
              <Card zIndex={-2}>No more cards</Card>
            )}
        </WrapperStyles>
      </div>
    );
  }
}

export default withStyles(styles)(Cards);