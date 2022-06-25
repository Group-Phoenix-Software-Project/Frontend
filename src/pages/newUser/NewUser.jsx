import "./newUser.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


export default function NewUser() {
  
    const [employeename, setEmpname] = useState("");

    const SendData = (e) => {
      e.preventDefault();

      var addEmployeeData = {

        employeename,
      };
      axios
        .post(`http://localhost:8080/createEmployee`, addEmployeeData)
        .then((res) => {
          console.log(res);

          if (res.status === 201) {
            alert("Employee Add");
          } else {
            Promise.reject();
          }
          e.target.reset();
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const navigate = useNavigate();

    function DelayRedirect(e, path) {
      e.preventDefault();
      setTimeout(() => navigate(path), 500);
    }

  
 
    return (
      <div className="newUser">
        <h1 className="newUserTitle">Add New Employee</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>First Name</label>
            <input type="text" placeholder="Enter your user name" 
            onChange={(e) => { setEmpname(e.target.value);
            }} />
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
            <input  type="email" required placeholder="Enter your email address" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password"  placeholder=" Enter your password" />
          </div>
          <div className="newUserItem">
            <label>Salary</label>
            <input type="float" />
          </div>
          <div>
        
              <button className="newUserButton"  type="submit"  onClick={SendData} >Submit</button>
          
          </div>
          <div>
            <Link to="/employeeList" className="link" >
              <button className="cancelUserButton">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
  
