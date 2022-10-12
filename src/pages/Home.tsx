import React from 'react'
import styled from 'styled-components';
import DonutChart from '../components/DonutChart';
import GraphChart from '../components/GraphChart';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import LatestResponseTable from '../components/LatestResponseTable';
import Widget from '../components/Widget';

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.homeBgColor};
`;

const MainContainer = styled.div`
  flex: 6;
`;

const Tabs = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const ListContainer = styled.div`
  box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  h1 {
    font-weight: bold;
    font-size: 1.1rem;
    color: ${props => props.theme.accentColor};
    margin-bottom: 15px;
  }
`

function Home() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Tabs>
          <Widget type="user"/>
          <Widget type="customer"/>
        </Tabs>
        <Tabs>
          <DonutChart />
          <GraphChart />
        </Tabs>
        <ListContainer>
          <h1>Latest Responses</h1>
          <LatestResponseTable />
        </ListContainer>
      </MainContainer>
    </Container>
  )
}

export default Home