import React from 'react'
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import TabIcon from '@mui/icons-material/Tab';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    border-right: 0.5px solid rgb(230, 227, 227);
    min-height: 100vh;
    background-color: ${(props) => props.theme.accentColor};
`;

const Top = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const Center = styled.div`
    margin-left: 10px;
    ul {
        list-style: none;
        p {
            margin-top: 15px;
            margin-bottom: 5px;
            font-size: 1rem;
            text-transform: uppercase; 
            font-weight: bold;
            color: ${(props) => props.theme.textColor};
        }
        li {
            display: flex;
            align-items: center;
            padding: 5px;
            cursor: pointer;
            &:hover {
                background-color: #80a3f0;
            }
            span {
                font-size: 0.9rem;
                margin-left: 10px;
                font-weight: 400;
                color: ${(props) => props.theme.textColor};
            }
            .icon {
                font-size: 1.5rem;
                color: ${(props) => props.theme.textColor};
            }
        }
    }
`;

const Bottom = styled.div`
    display: flex;
    margin-top: 20px;
`;

function Sidebar() {
  return (
    <Container>
        <Top>
            <Link to="/">
                <span>NIPPON KOEI</span>
            </Link>
        </Top>
        <Center>
            <ul>
                <p>Main</p>
                <Link to="/">
                    <li><DashboardIcon className="icon" /><span>Dashboard</span></li>                    
                </Link>
                <p>Lists</p>
                <Link to={"/users"} state={{type: "users"}}>
                    <li><SupervisedUserCircleIcon className="icon" /><span>Users</span></li>
                </Link>
                <Link to={"/customers"} state={{type: "customers"}}>
                    <li><PeopleOutlineIcon className="icon" /><span>Customers</span></li>
                </Link>
                <p>Useful</p>
                <li><AnalyticsIcon className="icon" /><span>Analytics</span></li>
                <li><CalendarMonthIcon className="icon" /><span>Calendar</span></li>
                <p>Service</p>
                <li><TabIcon className="icon" /><span>Documents</span></li>
                <li><SettingsIcon className="icon" /><span>Settings</span></li>
                <p>User</p>
                <li><AccountBoxIcon className="icon" /><span>Profile</span></li>
                <li><LogoutIcon className="icon" /><span>Logout</span></li>
            </ul>
        </Center>
        <Bottom>

        </Bottom>
    </Container>
  )
}

export default Sidebar