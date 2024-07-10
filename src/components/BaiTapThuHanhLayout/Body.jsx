import React from "react";
import Banner from "./Banner";
import Item from "./Item";

const Body = () => {
  return (
    <>
      <Banner />
      <div className="container pb-3">
        <div className="row">
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
          <div className="col-3">
            <Item />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
