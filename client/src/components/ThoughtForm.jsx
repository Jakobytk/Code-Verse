import React, { useState } from 'react';

const ThoughtForm = () => {
  const [thought, setThought] = useState('');

  const handleChange = (e) => {
    setThought(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted thought:', thought);
    setThought('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={thought}
        onChange={handleChange}
        placeholder="What's on your mind?"
        required
      ></textarea>
      <button type="submit">Share</button>
    </form>
  );
};

export default ThoughtForm;