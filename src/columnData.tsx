import { GridColDef } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const customerColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

// export const customerColumns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 70 },
//     {
//       field: "user",
//       headerName: "User",
//       width: 230,
//       renderCell: (params) => {
//         return (
//           <div className="cellWithImg">
//             <img className="cellImg" src={params.row.img} alt="avatar" />
//             {params.row.username}
//           </div>
//         );
//       },
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 230,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       width: 230,
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       width: 230,
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       width: 160,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 160,
//       renderCell: (params) => {
//         return (
//           <div className={`cellWithStatus ${params.row.status}`}>
//             {params.row.status}
//           </div>
//         );
//       },
//     },
// ];
    