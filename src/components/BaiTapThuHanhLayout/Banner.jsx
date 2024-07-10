import React from "react";

const Banner = () => {
  return (
    <section className="py-3">
      <div className="container">
        <div className="p-4 p-lg-2 bg-light">
          <div className="m-4 m-lg-5">
            <h1 className="fs-1 fw-lighter">A warm welcome!</h1>
            <p className="fs-5 text-body-secondary">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a className="btn btn-primary btn-lg" href="#!">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
