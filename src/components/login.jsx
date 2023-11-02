import React from "react";

function Login() {
  const aler = (e) => {
    e.preventDefault();
    alert("chức năng đang được update, vui lòng thử lại sau!");
  };
  return (
    <form className="mt-5">
      <label className="form-label text-white">Email address</label>
      <input type="email" className="form-control" />
      <label className="form-label mt-3 text-white">Password</label>
      <div className="position-relative">
        <input type="password" className="form-control" />
        <i className="fa-solid fa-unlock position-absolute top-50 end-0 translate-middle-y me-3"></i>
        <i className="fa-solid fa-lock position-absolute top-50 end-0 translate-middle-y me-3"></i>
      </div>
      <div className="mt-3">
        <input type="checkbox" name="" id="" />
        <label className="ms-3 text-white">Remember me</label>
      </div>
      <div>
        <button
          className="btn mt-4 text-white w-100"
          style={{ backgroundColor: "rgb(80, 39, 121)" }}
          onClick={aler}
        >
          Login
        </button>
      </div>
      <div>
        <button
          className="btn mt-4 w-100"
          style={{ backgroundColor: "rgb(249, 170, 248)" }}
          onClick={aler}
        >
          <i className="fa-solid fa-globe"></i>
          <span className="ms-3">Login with Borcell</span>
        </button>
      </div>
    </form>
  );
}
export default Login;
