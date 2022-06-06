import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { VideoCard } from "../../customComponent/Card/VideoCard";
import { getPlaylists } from "../../services/playlist/getPlaylists";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const [video, setVideo] = useState([]);

  const getAllPlaylists = async () => {
    try {
      const res = await getPlaylists();
      console.log(res);
      const playlistDetail = res.data.playlists.find(
        (item) => item._id === playlistId
      );

      if (playlistDetail.videos?.length) {
        setVideo(playlistDetail.videos);
      } else setVideo([]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPlaylists();
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
                type={`playlist`}
                playlistId={playlistId}
              />
            );
          })
        : "No Videos Available"}
    </div>
  );
};

export { SinglePlaylist };
