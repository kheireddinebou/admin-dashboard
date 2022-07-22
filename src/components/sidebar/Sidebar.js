import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function Sidebar({setDarkMode}) {
  return (
    <div className="sidebar">
      <div className="top">
        <Link className="Link" to="/">
          <h3 className="logo">Khirou</h3>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link className="Link" to="/users">
            <li>
              <GroupIcon />
              <span>Users</span>
            </li>
          </Link>
          <Link className="Link" to="/products">
            <li>
              <StorefrontIcon />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <LocalGroceryStoreIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <BarChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            <AirlineSeatLegroomExtraIcon />
            <span>Legs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <Link className="Link" to="/users/1234">
            <li>
              <PersonOutlineIcon />
              <span>Profile</span>
            </li>
          </Link>
          
            <li>
              <LogoutIcon />
              <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div onClick={() => setDarkMode(false)} className="colorOption"></div>
        <div onClick={() => setDarkMode(true)} className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
