import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="pt-4 px-5 container">
        <div className="row">
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i className="bi bi-collection"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  Fresh new layout
                </h2>
                <p className="mb-0">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i class="bi bi-cloud-download"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  Free to download
                </h2>
                <p className="mb-0">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i className="bi bi-card-heading"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  Jumbotron hero headers
                </h2>
                <p className="mb-0">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i className="bi bi-bootstrap"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  Feature boxes
                </h2>
                <p className="mb-0">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i className="bi bi-code"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  Simple clean code
                </h2>
                <p className="mb-0">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 mb-5">
            <div className="card bg-light h-100 border-0">
              <div className="card-body text-center p-5 pt-0 pt-lg-0">
                <div className="bg-primary text-white mb-4 mt-n4 bs-icon-feature">
                  <i className="bi bi-patch-check"></i>
                </div>
                <h2 className="font-weight-bold item-box-text">
                  A name you trust
                </h2>
                <p className="mb-0">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
