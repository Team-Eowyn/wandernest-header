import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HotelName from './hotelName.jsx';

import {Tripadvisor} from 'styled-icons/fa-brands';
import {PlusCircle, Heart} from 'styled-icons/boxicons-regular';
import {Bell} from 'styled-icons/fa-regular';
import { Search } from '@styled-icons/evil/Search';

const HeaderColor = styled.div`
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template: 1fr / repeat(4, 1fr);
  height: 60px;
  border-bottom: .5px solid lightgray;
  background-color: white;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: 1 / 1 / span 1 / span 2;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: 1 / 4 / span 1 / span 1;
  margin-right: 5px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const SiteIcon = styled(Tripadvisor)`
  background-color: #34e0a1;
  border-radius: 50%;
  padding: 5px;
`;

const SiteName = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: black;
  font-size: 25px;
  padding-bottom: 0px;
  padding-left: 10px;
`;

const SearchBar = styled.div`
  width: 350px;
  height: 35px;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 4px;
  margin: 10px;
  align-items: center;
`;

const SearchIcon = styled(Search)``;

const PostIcon = styled(PlusCircle)``;

const BellIcon = styled(Bell)``;

const HeartIcon = styled(Heart)``;

const IconName = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: black;
  font-size: 15px;
  padding-left: 5px;
`;

const SignIn = styled.button`
  background-color: black;
  color: white;
  border-styled: solid;
  border-color: black;
  border-radius: 5px;
  padding: 10px 16px;
  height: 35px;
  width: 70px;
  margin-left: 5px;
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
        <HeaderColor>
          <HeaderWrapper>
            <LeftWrapper>
              <Logo>
                <SiteIcon size='25px'></SiteIcon>
                <SiteName>WanderNest</SiteName>
              </Logo>
              <SearchBar>
                <Search size='25px'/>
              </SearchBar>
            </LeftWrapper>
            <RightWrapper>
              <Logo>
                <PostIcon size='15px' />
                <IconName>Post</IconName>
              </Logo>
              <Logo>
                <BellIcon size='15px' />
                <IconName>Alerts</IconName>
              </Logo>
              <Logo>
                <HeartIcon size='15px' />
                <IconName>Trips</IconName>
              </Logo>
              <SignIn>Sign in</SignIn>
            </RightWrapper>
          </HeaderWrapper>
          <HotelName name={this.state.hotelName}/>
        </HeaderColor>
      </div>
    )
  }
}

export default AppHeader;
