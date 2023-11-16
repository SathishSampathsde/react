import React, { Fragment } from "react";
import Navbar from "../../modules/header/Navbar/Navbar";

function PageNotFound() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <div class="card col-8 col-lg-8 mx-auto text-center mt-5 p-5">
          <div class="card-body">
            <div className="display-3">404</div>
            <div className="display-4">File not Found</div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default PageNotFound;
