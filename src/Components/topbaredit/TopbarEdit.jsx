import React from 'react'
import "./topbaredit.css"
import { Link } from "react-router-dom";



export default function Topbar() {
  return (
    <div className='topbar'>
    <div className='topbarWraper'>
        <div className='topLeft'>
            <h1 className='text' >Employee Details</h1>
        </div>
        <Link to="/newUser">
            <button className="icon">Add New Employee</button>
          </Link>
          </div>
    </div>
  );
}
