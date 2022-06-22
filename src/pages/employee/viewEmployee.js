import React, {  useEffect, useState } from "react";

import axios from "axios";

import "./employee.css";
import { AiOutlinePlusCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";


const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:8080/getEmployee`)
        .then((response) => {
          setEmployees(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
 

 
  const OnDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteEmployee/${id}`);
    window.location.reload(true);
  }

  return (
    <div className="container2-employee">
     
      <div className="container-employee">
        <span className="font-employee">
          Categor
          <Link to="/addemployee">
            <IconButton className="plusicon-employee">
              <AiOutlinePlusCircle className="icon1-employee" />
            </IconButton>
          </Link>
        </span>
        <br />
        <br />
        <table className="table-employee">
          {employees.map((employee) => {
            return (
              <React.Fragment key={employee.id}>
                <tbody className="tablebody-employee">
                  <tr className="tablebody-employee">
                    <td className="td1-employee">{employee.employeename}</td>
                    <td className="td2-employee">
                      <Link
                        to={`/editemployee/${employee.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton variant="outline-dark">
                          <AiFillEdit className="icon-employee" />
                        </IconButton>
                      </Link>
                    </td>
                    <td className="td2-employee">
                      <IconButton
                        variant="outline-dark"
                        onClick={() => OnDelete(employee.id)}
                      >
                        <AiFillDelete className="icon-employee" />
                      </IconButton>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </div>
  );
 };

export default ViewEmployee;
