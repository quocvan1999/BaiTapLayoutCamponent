import React from "react";

const Item = () => {
  return (
    <div className="card">
      <img
        src="https://whc.unesco.org/uploads/thumbs/site_1397_0026-1000-651-20181113123658.jpg"
        className="card-img-top w-100"
        alt="img"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Item;
