import React from "react";
import "../styles/Posts.css";

// Single Post Component
const Post = ({ post }) => (
  <div className="post-card">

    {/* Post Header */}
    <div className="post-header">
      <img
        src={post.profilePic}
        alt={post.author}
        className="post-author-pic"
      />
      <div className="post-author-info">
        <h4 className="post-author-name">{post.author}</h4>
        <span className="post-timestamp">{post.timestamp}</span>
      </div>
    </div>

    {/* Post Content */}
    <p className="post-content">{post.content}</p>

    {/* Post Image (if available) */}
    {post.image && (
      <img src={post.image} alt="Post" className="post-image" />
    )}

    {/* Post Actions */}
    <div className="post-actions">

      {/* Like Button */}
      <button className="post-action-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="action-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
          />
        </svg>
        <span>Like</span>
      </button>

      {/* Comment Button */}
      <button className="post-action-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="action-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span>Comment</span>
      </button>

      {/* Share Button */}
      <button className="post-action-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="action-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.835 13.91 9 14.54 9 15.222c0 1.25-.562 2.37-1.464 3.125m3.368-6.684a2 2 0 112.829 2.829m-2.829-2.829L14.793 17.5l-2.486 2.486a4 4 0 01-5.657-5.657L8.684 13.342zM15 15.222c0-1.25.562-2.37 1.464-3.125m-3.368 6.684a2 2 0 11-2.829-2.829m2.829 2.829L9.207 6.5l2.486-2.486a4 4 0 015.657 5.657L15 15.222z"
          />
        </svg>
        <span>Share</span>
      </button>
    </div>
  </div>
);

// Posts Component (list of posts)
const Posts = ({ posts }) => (
  <div className="posts-container">
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default Posts;
