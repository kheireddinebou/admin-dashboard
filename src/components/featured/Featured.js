import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <p className="title">Total Revenue</p>
        <button>
          <MoreVertIcon />
        </button>
      </div>
      <div className="bottom">
        <div className="chart-wrapper">
          <CircularProgressbar strokeWidth={5} value={66} text="66%" />
        </div>
        <p className="sales">Total sales made today</p>
        <p className="amount">420$</p>
        <p className="desc">
          Previous transactions processing , Last payments may not be included
        </p>
        <div className="summary">
          <div className="summary-item">
            <p>Target</p>
            <div className="profit positive">
              <KeyboardArrowUpIcon />
              $12k
            </div>
          </div>

          <div className="summary-item">
            <p>Last Month</p>
            <div className="profit negative">
              <KeyboardArrowDownIcon />
              $12k
            </div>
          </div>

          <div className="summary-item">
            <p>Last Week</p>
            <div className="profit positive">
              <KeyboardArrowUpIcon />
              $12k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
