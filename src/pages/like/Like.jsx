import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNotifications } from "reapop";
import { VideoCard } from "../../customComponent/Card/VideoCard";
import { getAllLikedVideos } from "../../services/videos/getAllLikedVideos";

const Like = () => {
  const { notify } = useNotifications();
  const { auth } = useSelector((store) => store.userData);
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const videos = await getAllLikedVideos(auth);
      console.log({ videos });
      if (videos?.data?.likes?.length) {
        setVideo(videos.data.likes);
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
                type={"like"}
              />
            );
          })
        : "No Videos Available"}
    </div>
  );
};

export { Like };
