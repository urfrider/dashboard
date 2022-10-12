import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCustomers, fetchUsers } from '../api';
import { customerColumns, userColumns } from '../columnData';
import { Link } from 'react-router-dom';

const Table = styled.div`
  box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -webkit-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  -moz-box-shadow: 1px 16px 19px -7px rgba(135,125,125,0.71);
  border-radius: 10px;
  height: 600px;
  min-width: 80vw;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.theme.bgColor};
  .cellWithImg {
    display: flex;
    align-items: center;
    .cellImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px; 
    }
  }
  .cellWithStatus {
    padding: 5px;
    border-radius: 5px;
    &.active {
    color: green;
    background-color: rgba(0, 128, 0, 0.05);
    }
    &.offline {
      color: crimson;
      background-color: rgba(255, 0, 0, 0.05);
    }
  }
  .cellAction {
    display: flex;
    align-items: center;
    gap: 15px;
    .viewButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted rgba(0, 0, 139, 0.596);
      cursor: pointer;
    }
    
    .deleteButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: crimson;
      border: 1px dotted rgba(220, 20, 60, 0.6);
      cursor: pointer;
    }
  }
`;

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    status: string;
}

interface ICustomer {
  users: {
    id: number;
    firstName: string;
    username: string;
    image: string;
    email: string;
    phone: string;
    age: number;
    status: string;
  }[]
  // array in users
}

interface IDatatableProps {
  type: string;
}

function Datatable({type}:IDatatableProps) {
  const {isLoading: userLoading, data: userData} = useQuery<IUser[]>("allUsers", fetchUsers);
  const userRows = userData?.map(user =>({
    id: user.id,
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    username: user.username,
    name: user.name,
    email: user.email,
    phone: user.phone,
    status: "active",
  }));

  const {isLoading: customerLoading, data: customerData} = useQuery<ICustomer>("allCustomer", fetchCustomers);
  const customerRows = customerData?.users.map(customer =>({
    id: customer.id,
    img: customer.image,
    username: customer.username,
    name: customer.firstName,
    email: customer.email,
    phone: customer.phone,
    status: "active",
  }));

  const actionColumn: GridColDef[] = [{field: "action", headerName: "Action", width: 200, renderCell: (params) => {
    return (
      <div className="cellAction">
        <Link to={`/customers/${params.row.id}`}>
          <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}];
  
  const isLoading = userLoading || customerLoading;
  return (
    <div>
      {isLoading? (<h1>Loading ...</h1>) : 
      <Table>
        <DataGrid
          rows={type=="users"? userRows : customerRows as any}
          columns={type=="users"? userColumns : customerColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </Table>}
    </div>
    
  )
}

export default Datatable