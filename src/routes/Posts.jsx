import React from 'react'
import { PostCard } from '../components/PostCard'

const Posts = ({posts}) => {
  return (
    <>
    <h2>Posts will be here</h2>
        {posts.map((post)=>(
       <PostCard key={post.id} {...post}/>
        ))}
    </>
  );
};

export default Posts;