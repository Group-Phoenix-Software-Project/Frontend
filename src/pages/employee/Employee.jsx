import "./employee.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import TopbarEdit from "../../Components/topbaredit/TopbarEdit";


export default function Employee() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
          
        return (
            
          <div className="userListUser">
             <div className = "app"> <viewEmployee/></div>
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}

          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    
    { field: "contact", headerName: "Contact", width: 200 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <button className="userListEdit"
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='./EmployeeEdit';
      }}
> Edit</button>
           
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
         
        );
      },
    },
  ];

  return (
    <div className="userList">
      <TopbarEdit/>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );

  
}