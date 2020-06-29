import React from 'react';
import PropTypes from 'prop-types';

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div >
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
);


SimpleBlog.propTypes = {
  blog: PropTypes.object.isRequired, 
  onClick: PropTypes.func.isRequired, 
};

export default SimpleBlog;