import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Friends() {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(document.querySelector(".get-height").clientHeight);
  });
  return ReactDOM.createPortal(
    <nav
      class="nav flex-column position-fixed end-0 text-center shadow"
      style={{
        top: height + "px",
      }}
    >
      <a class="nav-link active " aria-current="page" href="#">
        Những người bạn
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>

      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link " href="#">
        Link
      </a>
      <a class="nav-link  " href="#">
        Link
      </a>

      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
        Disabled
      </a>
    </nav>,
    document.body
  );
}
export default Friends;
