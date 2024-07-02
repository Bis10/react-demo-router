import React from "react";

const PostCard = ({
  id,
  title,
  author,
  content,
  published,
  date,
  togglePublish,
}) => {
  const handleTogglePublish = () => {
    togglePublish(id); // Call the togglePublish function passed from parent
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h4 className="card-subtitle mb-2 text-muted">{author}</h4>
          <p className="card-text">{content}</p>
          <p className="card-text">
            {published ? "Published" : "Not Published"}
          </p>
          <p className="card-text">{date}</p>
          <button className="btn btn-primary" onClick={handleTogglePublish}>
            Change Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
