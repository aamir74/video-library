import React from "react";
import { Link } from "react-router-dom";
import { addVideoToPlaylist } from "../../services/playlist/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../../services/playlist/removeVideoFromPlaylist";
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
    playlistId,
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

  const playlistHandler = async () => {
    try {
      let res = await removeVideoFromPlaylist(playlistId, videoId);
      console.log(res);
      if (res.status === 200) setVideo(res.data.playlist.videos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card card-with-text">
      <Link to={`/video/${videoId}`}>
        <img className="card-img" src={thumbnail} />
      </Link>
      <div className="card-details">
        <h3 className="card-text-title">{title}</h3>
        <p className="desc ">{description}</p>
      </div>
      {trashBtn ? (
        <div
          className="card-btn"
          onClick={() =>
            type === "like"
              ? likeHandler()
              : type === "playlist"
              ? playlistHandler()
              : watchListHandler()
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
  );
};

export { VideoCard };
