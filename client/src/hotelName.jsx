import React from 'react';
import styled from 'styled-components';

////@styled-icons/boxicons-regular/Heart
//@styled-icons/entypo/ShareAlternative

// const NameContainer = styled.div`

// `;

const Name = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 18px;
  background-color: white;
  padding-bottom: 10px;
  padding-left: 10px;
  border-bottom: .5px solid lightgray;
`;

class HotelName extends React.Component {
  render() {
    return (
      <Name>{this.props.name}</Name>
    );
  }
}

export default HotelName;