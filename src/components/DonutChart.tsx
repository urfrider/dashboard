import React from 'react';
import ApexChart from "react-apexcharts";
import styled from 'styled-components';

const Container = styled.div`
  flex: 2;
  padding: 20px;
  height: 300px;
  color: ${props => props.theme.contentColor};
  background: ${props => props.theme.bgColor};
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.accentColor};
  h1 {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

function DonutChart() {
  return (
    <Container>
        <Top>
          <h1>Total Response</h1>
        </Top>
        <ApexChart 
          type="donut"
          height="100%"
          width="100%"
          series={[21, 23, 19, 14, 6]}
          options={{
            chart: {
              height: 300,
              width: 400,
            },
            labels:['Very Satisfied', 'Slightly Satisfied', 'Neutral', 'Slightly Disatisfied', 'Very Disatisfied'],       
          }}
        />
    </Container>
  )
}

export default DonutChart