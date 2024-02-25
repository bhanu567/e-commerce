import React from "react";
import { Button } from "react-bootstrap";

const TableContent = (props) => {
  return (
    <>
     
        <div className="row justify-content-center">
          <div className="col-1">{props.tableData.date}</div>
          <div className="col-1">{props.tableData.place}</div>
          <div className="col-2">{props.tableData.name}</div>
          <div className="col-2">
            <Button variant="info" className="text-light px-5 btn-sm">
              Buy Tickets
            </Button>
          </div>
        </div>
        <div className="border-bottom  border-dark col-6 my-3 mx-auto"></div>
    </>
  );
};

export default TableContent;
