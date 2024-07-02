import React, { useState } from "react";
import PostCard from "../components/PostCard";

const Posts = ({ posts }) => {
  // State to manage posts
  const [allPosts, setAllPosts] = useState(posts);

  // Function to toggle publish status
  const handleTogglePublish = (postId) => {
    const updatedPosts = allPosts.map((post) => {
      if (post.id === postId) {
        return { ...post, published: !post.published };
      }
      return post;
    });
    setAllPosts(updatedPosts); // Update the state with updated posts
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">Posts will be here</h2>
      <div className="row">
        {allPosts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            togglePublish={() => handleTogglePublish(post.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
