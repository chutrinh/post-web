import React from "react";
import { useNavigate } from "react-router-dom";

function Mainavigate() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid bg-success">
        <div className="container">
          <div className="row p-5  rounded-3">
            <div className="col-3">
              <h1 className="text-white">Borcelle</h1>
            </div>
            <div className="col-9">
              <nav className="d-flex gap-5 text-decoration-none list-unstyled justify-content-end ">
                <li>
                  <a href="" className="btn btn-success">
                    Trang cá nhân
                  </a>
                </li>
                <li>
                  <a href="" className="btn btn-success">
                    message
                  </a>
                </li>
                <li>
                  <a className="btn btn-danger" onClick={() => navigate("/")}>
                    logout
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainavigate;
