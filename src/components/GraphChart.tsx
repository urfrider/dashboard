import React from 'react'
import styled from 'styled-components';
import ApexChart from "react-apexcharts";


const Container = styled.div`
  display: flex;
  flex: 3;
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

function GraphChart() {
  return (
    <Container>
       <Top>
          <h1>Last 6 Months (Response)</h1>
        </Top>
        <ApexChart 
          type="area"
          height="100%"
          width="100%"
          series={[
            {
              name: "Total response",
              data: [21, 23, 19, 14, 6, 14]
            },
          ]}
          options={{
            chart: {
              // toolbar: { show: false },
            },
            // labels: ["15 Nov","17 Nov","19 Nov","21 Nov","23 Nov","25 Nov"],
            xaxis: {
              // type: 'datetime',
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
              // opposite: true
            },
          }}
        />
    </Container>
  )
}

export default GraphChart