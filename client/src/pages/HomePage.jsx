import { useQuery } from '@apollo/client';

import ThoughtList from '../components/PostList';
import ThoughtForm from '../components/PostForm';

import { QUERY_THOUGHTS } from '../utils/queries';

import './HomePage.css';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="Home-Page">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Food for Thought"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;