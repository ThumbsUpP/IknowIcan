import React from "react";
import styled from 'styled-components';

const CardStyles = styled.div`
  background: whitesmoke;
  width: 100vw;
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0 
`

const Card = ({ zIndex = 0, children }) => (
  <CardStyles style={{zIndex }}>{children}</CardStyles>
);

export default Card;
