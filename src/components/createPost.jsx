import React from "react";

function CreatePost() {
  return (
    <>
      <div className="container mt-5 ">
        <div
          className="row mx-auto rounded shadow p-3"
          style={{ width: "940px" }}
        >
          <div className="text-start mb-2 w-25">
            <img
              className="w-25 me-3 rounded-circle"
              src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/274879801_3124725294474894_2281591655370693797_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K1doiq_l560AX_dsmBL&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDdykGpsZnoBRSCXcgVk7HacjhBD2oR5I1h58CgfkR-YA&oe=6550B8F6"
              alt=""
            />
            <b>chú trình</b>
          </div>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="tiêu đề*"
          />
          <textarea
            className="form-control mb-2"
            type="text"
            placeholder="mô tả*"
            cols="30"
            rows="5"
          ></textarea>
          <input className="form-control  mb-4" type="file" />
          <button className="btn btn-success">Đăng</button>
        </div>
      </div>
    </>
  );
}
export default CreatePost;
