import { useState, useEffect } from "react";
import { VideoCard } from "../../customComponent/Card/VideoCard";
import { getAllWatchLaterVideos } from "../../services/videos/getAllWatchLaterVideos";

const WatchLater = () => {
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const videos = await getAllWatchLaterVideos();
      console.log({ videos });
      if (videos?.data?.watchlater?.length) {
        setVideo(videos.data.watchlater);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="listing-content">
      {video.length
        ? video.map((el, i) => {
            return (
              <VideoCard
                key={el._id}
                videoId={el._id}
                title={el.title}
                description={el.description}
                thumbnail={el.thumbnail}
                uploaded_on={el.uploaded_on}
                trashBtn={true}
                video={video}
                setVideo={setVideo}
                type={"watchlist"}
              />
            );
          })
        : "No Videos Available"}
    </div>
  );
};

export { WatchLater };
