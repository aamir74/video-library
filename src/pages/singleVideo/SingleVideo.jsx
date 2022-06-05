import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { addToWatchLater } from "../../services/videos/addToWatchLater";
import { getAllLikedVideos } from "../../services/videos/getAllLikedVideos";
import { getSingleVideo } from "../../services/videos/getSingleVideo";
import { likeVideo } from "../../services/videos/likeVideo";
import { removeFromWatchLater } from "../../services/videos/removeFromWatchLater";
import { removeLikedVideo } from "../../services/videos/removeLikedVideo";

import "./SingleVideo.css";

const SingleVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState();
  const [like, setLike] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const getVideo = async () => {
    try {
      let likedVideos = await getAllLikedVideos();
      likedVideos = likedVideos.data.likes;
      const check =
        likedVideos.length !== 0 &&
        likedVideos?.find((video) => video._id === videoId);
      if (check) setLike(true);
      const res = await getSingleVideo(videoId);
      if (res.data.video) setVideo(res.data.video);
    } catch (err) {
      console.log(err);
    }
  };

  const LikeHandler = async () => {
    try {
      let res;
      if (like) res = await removeLikedVideo(videoId);
      else res = await likeVideo(video);
      if (res.status === 201 || res.status === 200) setLike(!like);
    } catch (err) {
      console.log(err);
    }
  };

  const watchLaterHandler = async () => {
    try {
      let res;
      if (watchLater) res = await removeFromWatchLater(videoId);
      else res = await addToWatchLater(video);
      if (res.status === 201 || res.status === 200) setWatchLater(!watchLater);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="single-video">
      <div className="single-video-card">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {video && (
        <div className="vid-content-wrapper">
          <div className="vid-content">
            <h2> {video.title}</h2>
            <div className="cta-btn">
              <div
                className={like ? `active-feat` : `normal-btn`}
                onClick={LikeHandler}
              >
                <span>
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  {/* {singleVideo.isInLiked ? "Liked" : "Like"} */}
                  Like
                </span>
              </div>
              <div
                className={watchLater ? `active-feat` : `normal-btn`}
                onClick={watchLaterHandler}
              >
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  {/* {singleVideo.isInWatchLater
                  ? "Delete From Watch Later"
                  : "Add To Watch Later"} */}
                  Add To Watch Later
                </span>
              </div>
              <div
                className="normal-btn"
                // onClick={() => addToPlaylist()}
              >
                <span>
                  <i className="fa fa-play-circle" aria-hidden="true"></i> Save
                </span>
              </div>
              <div
                // onClick={() => copyToClipboard()}
                // className={copy ? `active-feat` : `normal-btn`
                // }
                className="active-feat"
              >
                <span>
                  <i className="fa-solid fa-share-nodes"></i>{" "}
                  {/* {copy ? "Link Copied" : "Share"} */}
                </span>
              </div>
            </div>
            <h2>Description : </h2>
            <p>{video.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { SingleVideo };
