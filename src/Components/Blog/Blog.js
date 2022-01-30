import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          margin: "20px",
          border: "1px solid",
          backgroundColor: "lightSkyBlue",
        }}
      >
        Blog Post
      </h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
            <image src="../../Images/Frame-1.png"></image>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
            <image src="../../Images/Frame-1.png"></image>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
            <image src="../../Images/Frame-1.png"></image>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <p>Some text..</p>
            <image src="../../Images/Frame-1.png"></image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
