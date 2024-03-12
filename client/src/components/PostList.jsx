import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { REMOVE_THOUGHT } from '../utils/mutation';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {

  const [removeThought,  {}] = useMutation(REMOVE_THOUGHT, {
    refetchQueries: [
      QUERY_THOUGHTS,
      'getThoughts',
      QUERY_ME,
      'me'
    ]
  })
  
  const handleRemoveThought = async (thoughtId) => {
      try {
        await removeThought({
          variables: { thoughtId }
        }); 
      } catch (err) {
        console.log(err);
      }
    };

  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Posted this {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Post Created {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            {Auth.loggedIn() && thought.thoughtAuthor === Auth.getProfile().authenticatedPerson.username && (
              <button className="btn btn-danger" onClick={() => handleRemoveThought(thought._id)}>Remove</button>
              )}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
