import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  console.log(props);
  const { details, updateLikes } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
      {
        details ? details.map(post => {
          return (<Post post={post} key={post.id} likePost={updateLikes} />)
        }) : null
      }
    </div>
  );
};

export default Posts;
