import React from "react";
import "./List.scss";
import ListTable from "../../components/listTable/ListTable";
import { Link } from "react-router-dom";

function List() {
  return (
    <div className="list">
      <div className="top">
        <p>Add new user</p>
        <Link className="Link" to="/users/new">
          <button>Add New</button>
        </Link>
      </div>
      <ListTable />
    </div>
  );
}

export default List;
