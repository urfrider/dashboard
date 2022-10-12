import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  background-color: ${(props) => props.theme.bgColor};
  height: 80px;
  padding: 20px;
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgrey;
  padding: 3px;
  input {
    width: 300px;
    border: none;
    outline: none;
    background: transparent;
    &::placeholder {
      font-size: 12px;
    }
  }
  .icon {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  .icon {
    color: ${(props) => props.theme.accentColor};
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    color: white;
    position: absolute;
    top: -5px;
    right: -5px;
  }
`;

function Navbar() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <Searchbar>
        <input type="text" placeholder="Search"/>
        <SearchIcon className="icon"/>
      </Searchbar>
      <Items>
        <Item>
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">2</div>
        </Item>
        <Item>
          <DarkModeOutlinedIcon onClick={toggleDarkAtom} className="darkModeIcon icon"/>
        </Item>
        <Item>
          <img className="avatar" src="https://i.ytimg.com/vi/DWLtyWyimg0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5qt2MGMmd6hOjRAQR2gmav3gyzg"/>
        </Item>
      </Items>
    </Container>
  )
}

export default Navbar