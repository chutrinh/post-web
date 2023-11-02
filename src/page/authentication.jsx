import React, { useEffect, useRef, useState } from "react";
import Login from "../components/login";
import Resgister from "../components/register";
import _3D from "../components/_3D";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

function Authentication() {
  const [changeForm, setChangeForm] = useState(true);
  const canvas = useRef();

  useEffect(() => {
    console.log(canvas);
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "100vh" }}>
          <div
            className="col-lg-5 col-xl-4 col-md-6 h-100"
            style={{ backgroundColor: "rgb(173, 83, 166)" }}
          >
            <div className="text-start p-5">
              <div className="text-white">
                <i className="fa-brands fa-rocketchat h1 me-3"></i>
                <span className="h1 ">Borcelle</span>
              </div>
              <div className="d-flex justify-content-between ">
                <span className="text-white">Wellcome to our App</span>
                <span
                  className="text-decoration-underline btn text-white"
                  onClick={() => setChangeForm(!changeForm)}
                >
                  {changeForm ? " Resgister" : "Login"}
                </span>
              </div>
              {changeForm && <Login />}
              {!changeForm && <Resgister />}
            </div>
          </div>
          <div
            className="_3D col-lg-7 col-xl-8 col-md-6 h-100"
            style={{ backgroundColor: "black" }}
          >
            <Canvas
              ref={canvas}
              camera={{ position: [0, 0, window.innerWidth < 800 ? 5 : 2.5] }}
              style={{ height: "100%" }}
            >
              <OrbitControls />
              <_3D />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
