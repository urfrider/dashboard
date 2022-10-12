import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Datatable from '../components/Datatable';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.homeBgColor};
`;

const MainContainer = styled.div`
  flex: 6;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  h1 {
    color: ${props => props.theme.accentColor};
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
  }
`;

function List() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Tabs>
          {state.type=="users"? <h1>List of Users</h1> : <h1>List of Customers</h1>}
          <Datatable type={state.type}/>
        </Tabs>
      </MainContainer>
    </Container>
  )
}

export default List