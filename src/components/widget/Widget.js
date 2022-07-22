import "./Widget.scss";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function Widget({ type }) {
  const amount = 100;
  const diff = 20;
  let data;

  switch (type) {
    case "users":
      data = {
        name: "users",
        isMoney: "false",
        link: "See all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: "red",
              backgroundColor: "pink",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        name: "orders",
        isMoney: "false",
        link: "View all orders",
        icon: <ShoppingCartIcon className="icon"  style={{
            color: "gold",
            backgroundColor: "yellow",
          }}/>,
      };
      break;
    case "earnings":
      data = {
        name: "earnings",
        isMoney: "true",
        link: "View net earnings",
        icon: <MonetizationOnIcon className="icon"  style={{
            color: "green",
            backgroundColor: "lightgreen",
          }}/>,
      };
      break;
    case "balance":
      data = {
        name: "balance",
        isMoney: "false",
        link: "See details",
        icon: <AccountBalanceWalletIcon className="icon"  style={{
            color: "purple",
            backgroundColor: " rgb(202, 1, 282)",
          }}/>,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.name}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <a href="/">{data.link}</a>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
