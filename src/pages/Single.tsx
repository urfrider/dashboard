import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GraphChart from '../components/GraphChart';
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
  padding: 20px;
  display: flex;
  gap: 20px;
  color: ${props => props.theme.contentColor};
  .left {
    position: relative;
    flex: 1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme.bgColor};
    h1 {
      margin-bottom: 20px;
      font-weight: bold;
      color: ${props => props.theme.accentColor};
    }
    .editBtn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      font-size: 14px;
      border-radius: 0px 10px 0px 10px;
      background-color:#7551f818;
      color: ${props => props.theme.accentColor};
      cursor: pointer;
    }
    .item {
      display: flex;
      gap: 20px;
      .itemImg {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .details {
      .itemTitle {
        margin-bottom: 10px;
        color: #555;
      }
      .detailItem {
        margin-bottom: 10px;
        font-size: 14px;

        .itemKey {
          font-weight: bold;
          color: gray;
          margin-right: 5px;
        }

        .itemValue {
          font-weight: 300;
        }
      }
    }
  }
  .right {
    flex: 2;
  }
`;

function Single() {
  const { customerId } = useParams();
  console.log(customerId);
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Navbar />
        <Tabs>
          <div className="left">
            <div className="editBtn">edit</div>
            <h1>Information</h1>
            <div className="item">
              <img className="itemImg" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="right">
            <GraphChart />
          </div>
        </Tabs>
        <Tabs>
          <div className="bottom">
            HEAT MAP
          </div>
        </Tabs>
      </MainContainer>
    </Container>
  )
}

export default Single