import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  MailOutline,
  DynamicFeed,
  Report
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
             Dashboard
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Sales
            </li>
            <Link to="/order" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Orders
            </li>
            </Link>

            <div className="sidebarMenu">
            <Link to="/productList" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
               Products
              </li>
            </Link>
            <Link to="/employee" className="link">
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
              Employees
            </li>
            </Link>
            <Link to="/customer" className="link">
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
             Customers
            </li>
            </Link>
            <Link to="/rating" className="link">
            <li className="sidebarListItem ">
              <TrendingUp className="sidebarIcon" />
             Rating
            </li>
            </Link>

            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Notifications
            </li>
           
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
        </div>
        <div className="sidebarMenu">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </div>
          </ul>
        </div>  
        </div>
        </div>
    
  );
}