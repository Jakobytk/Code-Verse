import './CommentList.css';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3
        className="p-5"
        style={{ borderBottom: '2px solid #1a1a1a' }}
        >
          No Comments Yet
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
