import React from 'react'
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { fetchCustomers, fetchUsers } from '../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    height: 100px;
    color: ${props => props.theme.contentColor};
    background: ${props => props.theme.bgColor};
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
    .left, .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .title {
            font-size: 1.1rem;
            font-weight: bold;
            color: ${props => props.theme.accentColor};
        }
        .counter {
            font-size: 1.6rem;
        }
        .link {
            border-bottom: 1px solid grey;
            cursor: pointer;
        }
        .percentage {
            display: flex;
            align-items: center;
            font-size: 1rem;
            &.positive {
                color: green;
            }
            &.negative {
                color: red;
            }
        }
        .icon {
            /* color: white; */
            font-size: 2rem;
            padding: 5px;
            /* background-color: ${props => props.theme.accentColor}; */
            border-radius: 5px;
            align-self: flex-end;
        }
    }
`;

interface IWidgetProps {
    type: string;
}

function Widget({type}:IWidgetProps) {
    // temporary data
    const {isLoading: userLoading, data: userData} = useQuery("allUsers", fetchUsers);
    const {isLoading: customerLoading, data: customerData} = useQuery("allCustomers", fetchCustomers);

    var data;
    switch(type){
        case "user":
            // const {isLoading: userLoading, data: userData} = useQuery("allUsers", fetchUsers);
            data = {
                title: "Users",
                counter: userData?.length,
                link: "See all users",
                icon: <PersonOutlineIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}/>,
                diff: -10,
                type: "users",
            };
        break;
        case "customer":
            // const {isLoading: customerLoading, data: customerData} = useQuery("allCustomers", fetchCustomers);
            data = {
                title: "Customers",
                counter: customerData?.users.length,
                link: "See all customers",
                icon: <PeopleOutlinedIcon className="icon" style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}/>,
                  diff: 40,
                  type: "customers",
            };
        break;
        default: 
        break;
    }
  return (
    <Container>
        <div className="left">
            <span className="title">{data?.title}</span>
            <span className="counter">{data?.counter}</span>
            <Link to={`/${data?.type}`} state={{type: data?.type}}>
                <span className="link">{data?.link}</span>
            </Link>
        </div>
        <div className="right">
            <div className={data?.diff as number > 0 ? "percentage positive" : "percentage negative"}>
                {data?.diff as number > 0 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownOutlinedIcon />}
                {data?.diff} %
            </div>
            {data?.icon}
        </div>
    </Container>
  )
}

export default Widget

