import React from "react";
import { Link } from "react-router-dom";
import { removeFromWatchLater } from "../../services/videos/removeFromWatchLater";
import { removeLikedVideo } from "../../services/videos/removeLikedVideo";

const VideoCard = (props) => {
  const {
    videoId,
    title,
    description,
    thumbnail,
    uploaded_on,
    trashBtn,
    video,
    setVideo,
    type,
  } = props;

  const likeHandler = async () => {
    try {
      const res = await removeLikedVideo(videoId);
      if (res.status === 200) {
        const filterVideo = video.filter((ele) => ele._id !== videoId);
        console.log(filterVideo);
        setVideo(filterVideo);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const watchListHandler = async () => {
    try {
      const res = await removeFromWatchLater(videoId);
      if (res.status === 200) {
        const filterVideo = video.filter((ele) => ele._id !== videoId);
        console.log(filterVideo);
        setVideo(filterVideo);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link to={trashBtn ? `/${type}` : `/video/${videoId}`}>
      <div className="card card-with-text">
        <img className="card-img" src={thumbnail} />
        <div className="card-details">
          <h3 className="card-text-title">{title}</h3>
          <p className="desc ">{description}</p>
        </div>
        {trashBtn ? (
          <div
            className="card-btn"
            onClick={() =>
              type === "like" ? likeHandler() : watchListHandler()
            }
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </div>
        ) : (
          <div className="card-btn">
            <i className="fa fa-ellipsis-v" aria-hidden="true" />
          </div>
        )}
      </div>
    </Link>
  );
};

export { VideoCard };
