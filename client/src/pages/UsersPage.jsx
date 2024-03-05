import React, { useState, useEffect } from 'react';

const UserPage = ({ user }) => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchBlogs = async () => {
    };

    fetchBlogs();
  }, []);

  const handleNewBlogSubmit = (event) => {
    event.preventDefault();
    console.log('New Blog Submitted:', newBlog);
    setNewBlog({ title: '', content: '' });
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <h3>Create a New Blog</h3>
      <form onSubmit={handleNewBlogSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Blog</button>
      </form>
      <hr />
      <h3>Your Blogs</h3>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
};

export default UserPage;