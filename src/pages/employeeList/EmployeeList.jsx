import "./employeeList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TopbarEdit from "../../Components/topbaredit/TopbarEdit";
import axios from "axios";


export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
     console.log(employees);
   ViewEmployee()

  }, []);

  const ViewEmployee = () => {
    axios
      .get(`http://localhost:8080/getEmployee`)
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
        return employees;
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteEmployee/${id}`);
    window.location.reload(true);
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100
    },
    {
      field: "user",
      headerName: "First Name",
      width: 150
    },
    {
      field: "LName",
      headerName: "Last Name",
      width: 150
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 150,
    },
    {
      field: "password",
      headerName: "Password",
      width: 150,
    },
    {
      field: "DOB",
      headerName: "Date of Birth",
      width: 160,
    },
    {
      field: "contact number",
      headerName: "Contact Number",
      width: 100,
    },
    {
      field: "salary",
      headerName: "Salary",
      width: 120,
    },
    {
      field: "position",
      headerName: "Position",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editEmployee/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />

          </>
        );
      },
    },
  ];

  const data = [
    {
      id: "password",
      user: "Password",
      LName: "Password",
    },

  ];
  return (
    <div className="userList">
      <TopbarEdit />
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
      />
    </div>
  );


}


