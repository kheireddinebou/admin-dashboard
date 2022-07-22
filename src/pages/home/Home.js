import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Widget from "../../components/widget/Widget";
import DataTable from "../../components/dataTable/DataTable";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title='Last 6 Months (Revenue)' height={330} width={680}/>
        </div>

        <div className="list-container">
            <p className="list-title">Latest Transactions</p>
            <DataTable />
        </div>
      </div>
  );
}

export default Home;
