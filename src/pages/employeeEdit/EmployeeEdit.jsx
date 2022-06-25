import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./employeeEdit.css";
import axios from "axios";

export default function EmployeeEdit() {
  const UpdateEmployee = () => {
    const params = useParams();

    const [employeename, setEmployee] = useState("");

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
      axios
        .get(`http://localhost:8080/getEmployeeByid/${params.id}`)
        .then((response) => {
          setEmployee(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


    const UpdateEmployee = () => {
      axios
        .put(`http://localhost:8080/updateEmployee/${params.id}`, {
          employeename,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const navigate = useNavigate();

    function DelayRedirect(e, path) {
      e.preventDefault();
      setTimeout(() => navigate(path), 300);
    }

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>First Name</label>
              <input type="text" placeholder="Enter your user name" />
            </div>
            <div className="newUserItem">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Designation</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="newUserItem">
              <label>Date of Birth</label>
              <input type="date" placeholder="Enter your full name" />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="newUserItem">
              <label>Contact No:</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder=" Enter your password" />
            </div>
            <div className="newUserItem">
              <label>Salary</label>
              <input type="number" />
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}