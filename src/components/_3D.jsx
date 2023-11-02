import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function _3D() {
  const box = useRef();
  useFrame(() => {
    box.current.rotation.y += 0.01;
    box.current.rotation.x += 0.01;
  });
  return (
    <>
      <mesh ref={box}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
    </>
  );
}
export default _3D;
