import { useState, useEffect } from "react";
import { VideoCard } from "../../customComponent/Card/VideoCard";
import { getAllLikedVideos } from "../../services/videos/getAllLikedVideos";

const Like = () => {
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const videos = await getAllLikedVideos();
      console.log({ videos });
      if (videos?.data?.likes?.length) {
        setVideo(videos.data.likes);
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
              />
            );
          })
        : "No Videos Available"}
    </div>
  );
};

export { Like };
