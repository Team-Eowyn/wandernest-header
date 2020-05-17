import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import HotelName from './hotelName.jsx';

import {Tripadvisor} from 'styled-icons/fa-brands';
import {PlusCircle, Heart} from 'styled-icons/boxicons-regular';
import {Bell} from 'styled-icons/fa-regular';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  height: 60px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1 / span 1 / span 2;
`;

const RightWrapper = styled.div`
  display: flex;
  grid-area: 1 / 4 / span 1 / span 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
// width: 188px;
//   height: 40px;

const SiteIcon = styled(Tripadvisor)`

`;

const SiteName = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: black;
  font-size: 50px;
  padding-bottom: 0px;
  padding-left: 15px;
`;

const SearchBar = styled.div`
  width: 350px
  height: 42px;
  border-style: solid;
  border-color: lightgray;
  border-width: 2px;
  border-radius: 4px;
`;

// const SearchIcon = styled(icon)`

// `;

const PostIcon = styled(PlusCircle)`

`;

const BellIcon = styled(Bell)`

`;

const HeartIcon = styled(Heart)`

`;

const SignIn = styled.button`
  background-color: black;
  color: white;
  border-styled: solid;
  border-color: black;
  border-radius: 5px;
  padding: 10px 16px;
  height: 42px;
  width: 81px;
`;


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: '',
    };
  }

  componentDidMount() {
    const url = new URL(window.location.href);
    const ID = url.searchParams.get('id');

    axios.get(`/header/${ID}`)
      .then((response) => {
        const name = response.data.name
        this.setState({
          hotelName: name,
        })
      })
      .catch((error) => {
        console.log('error on mount');
      })
      .finally(() => {

      });
  }


  render() {
    return(
      <div>
        <HeaderWrapper>
          <LeftWrapper>
            <Logo>
              <SiteIcon size='40px'></SiteIcon>
              <SiteName>WanderNest</SiteName>
            </Logo>
            <SearchBar>
              {/* <SearchIcon></SearchIcon> */}
            </SearchBar>
          </LeftWrapper>
          <RightWrapper>
            <PostIcon size='25px' />
            <BellIcon size='25px' />
            <HeartIcon size='25px' />
            <SignIn>Sign in</SignIn>
          </RightWrapper>
        </HeaderWrapper>
        <HotelName name={this.state.hotelName}/>
      </div>
    )
  }
}

ReactDOM.render(<AppHeader />, document.getElementById('Header'));