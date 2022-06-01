import React from "react";

const VideoCard = (props) => {
  const { title, description, thumbnail, uploaded_on } = props;
  return (
    <div className="card card-with-text">
      <img className="card-img" src={thumbnail} />
      <div className="card-details">
        <h3 className="card-text-title">{title}</h3>
        <p className="desc ">{description}</p>
      </div>
      <div className="card-btn">
        <i className="fa fa-ellipsis-v" aria-hidden="true" />
      </div>
    </div>
  );
};

export { VideoCard };
