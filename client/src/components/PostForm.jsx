import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutation';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import './PostForm.css';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    refetchQueries: [
      QUERY_THOUGHTS,
      'getThoughts',
      QUERY_ME,
      'me'
    ]
  });

  // const [removeThought,  {}] = useMutation(REMOVE_THOUGHT, {
  //   refetchQueries: [
  //     QUERY_THOUGHTS,
  //     'getThoughts',
  //     QUERY_ME,
  //     'me'
  //   ]
  // })

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().authenticatedPerson.username
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  // const handleRemoveThought = async (thoughtId) => {
  //   try {
  //     await removeThought({
  //       variables: { thoughtId }
  //     }); 
  //   } catch {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <h3>Post Here</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="New Post"
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical', height: '100px', width: '500px'}}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p className='Login-p'>
          You need to be logged in to share your thoughts. Please{' '}
          <Link className='Login-Link' to="/login">login</Link> or <Link className='Login-Link' to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ThoughtForm;
