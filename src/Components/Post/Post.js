import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const PF = "https://elegant-gerard-39669.herokuapp.com/images/";
  return (
    <div className="post">
      <Link to={`/posts/${post._id}`} className="link">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>

          <span className="postTitle">{post.title}</span>

          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
            <span style={{ marginLeft: "10px" }}>({post.username})</span>
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
};

export default Post;
