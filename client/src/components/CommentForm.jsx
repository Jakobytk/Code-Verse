import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutation';
import Auth from '../utils/auth';
import './CommentForm.css'; // Import the CSS file

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().authenticatedPerson.username
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="comment-container">
      <h4 className='comment-header'>Comment</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div>
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input comment-textarea"
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button className="btn-Comment" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in. Please{' '}
          <Link className='logo' to="/login">login</Link> or <Link className='logo' to="/signup">Sign Up.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
