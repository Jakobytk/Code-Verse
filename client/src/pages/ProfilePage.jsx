import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {user.username}!</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;