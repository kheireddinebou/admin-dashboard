import React from "react";
import "./Single.scss";
import Chart from "../../components/chart/Chart";
import DataTable from "../../components/dataTable/DataTable";

function Single() {
  return (
    <div className="single">
        <div className="acount-informations">
          <div className="top">
            <div className="left">
              <p className="title">Information</p>
              <button>Edit</button>
              <div className="user-info">
                <img
                  className="user-info-img"
                  src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user image"
                />
                <div className="user-details">
                  <p className="user-name">Naser Saad</p>
                  <p className="item">Email : nasersaad@gmail.com</p>
                  <p className="item">Phone : +213 569069690</p>
                  <p className="item">Address : salam 812, Sharika </p>
                  <p className="item">Country : UAE</p>
                </div>
              </div>
            </div>
            <div className="right">
            <Chart title='User spending (Last 6 Months)' height={330} width={780} />

            </div>
          </div>
          <div className="bottom">
            <p className="title">Last Transactions</p>
          <DataTable />
          </div>
        </div>
      </div>
  );
}

export default Single;
