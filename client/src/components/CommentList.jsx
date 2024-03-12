// import { useMutation } from '@apollo/client';
// import { REMOVE_COMMENT } from '../utils/mutation';
// import { QUERY_USER, QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';
import './CommentList.css';

const CommentList = ({ comments = [] }) => {

  // const [removeComment] = useMutation(REMOVE_COMMENT, {
  //   refetchQueries: [
  //     QUERY_USER,
  //     'user',
  //     QUERY_THOUGHTS,
  //     'getThoughts',
  //     QUERY_ME,
  //     'me'
  //   ]
  // });
  
  // const handleDeleteComment = async (thoughtId) => {

  //   try {
  //     await removeComment({
  //       variables: {
  //         thoughtId,
  //         comments
  //       }
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  
  if (!comments.length) {
    return <h3
        className="p-5"
        style={{ borderBottom: '2px solid #1a1a1a' }}
        >
          No Comments
        </h3>;
  }

  return (
    <>
      <h3
        className="p-5"
        style={{ borderBottom: '2px solid #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '20px' }}>
                    on {comment.createdAt}
                  </span>
                  {/* {Auth.getProfile().authenticatedPerson.username === comment.commentAuthor && (
                  <button
                    className="btn btn-danger delete-button"
                    onClick={() => handleDeleteComment(comment._id)}
                  >
                    Delete
                  </button>
                  )} */}
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
