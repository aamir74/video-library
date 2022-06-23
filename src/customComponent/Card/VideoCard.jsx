import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNotifications } from "reapop";
import { addVideoToPlaylist } from "../../services/playlist/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../../services/playlist/removeVideoFromPlaylist";
import { removeFromWatchLater } from "../../services/videos/removeFromWatchLater";
import { removeLikedVideo } from "../../services/videos/removeLikedVideo";

const VideoCard = (props) => {
  const { notify } = useNotifications();
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
  const { auth } = useSelector((store) => store.userData);
  const likeHandler = async () => {
    try {
      const res = await removeLikedVideo(videoId, auth);
      if (res.status === 200) {
        const filterVideo = video.filter((ele) => ele._id !== videoId);
        setVideo(filterVideo);
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Removed from liked videos</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong, Please try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const watchListHandler = async () => {
    try {
      const res = await removeFromWatchLater(videoId, auth);
      if (res.status === 200) {
        const filterVideo = video.filter((ele) => ele._id !== videoId);
        console.log(filterVideo);
        setVideo(filterVideo);
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Removed from watchlist</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong, Please try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const playlistHandler = async () => {
    try {
      let res = await removeVideoFromPlaylist(playlistId, videoId, auth);
      if (res.status === 200) {
        setVideo(res.data.playlist.videos);
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Removed from Playlist</h5>,
          status: "success",
          dismissible: true,
          dismissAfter: 5000,
          showDismissButton: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong, Please try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="card card-with-text">
      <Link to={`/video/${videoId}`}>
        <img className="card-img" src={thumbnail} />
      </Link>
      <div className="card-details">
        <h3 className="card-text-title">{title}</h3>
        <p className="desc">{description}</p>
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
          <i className="fa fa-trash" aria-hidden="true" title="delete" />
        </div>
      ) : (
        <></>       
      )}
    </div>
  );
};

export { VideoCard };
