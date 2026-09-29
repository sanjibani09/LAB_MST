import { useState } from "react";

function PostBox() {
  const [postContent, setPostContent] = useState("");

  const characterCount = postContent.length;
  const limitExceeded = characterCount > 100;

  const handlePost = () => {
    alert("Post submitted successfully!");
    setPostContent("");
  };

  return (
    <div className="post-box">
      <h2>Create a Post</h2>

      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Write your post..."
      ></textarea>

      <p className="counter">
        {characterCount} / 100
      </p>

      {limitExceeded && (
        <p className="error">Limit exceeded</p>
      )}

      <button
        onClick={handlePost}
        disabled={postContent.trim() === "" || limitExceeded}
      >
        Post
      </button>
    </div>
  );
}

export default PostBox;