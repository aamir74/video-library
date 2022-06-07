import React, { useEffect, useState } from "react";
import { useNotifications } from "reapop";
import { VideoCard } from "../../../customComponent/Card/VideoCard";
import { useFilter } from "../../../hooks/context/filter-context";
import { getAllVideos } from "../../../services";
import { getVideosData } from "../../../utils/products/productHandler";

import "./VideoListing.css";
const VideoListing = () => {
  const { notify } = useNotifications();
  const { state, dispatch } = useFilter();
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const videos = await getAllVideos();
      console.log({ videos });
      if (videos.data.videos.length) {
        console.log(state);
        getVideosData(videos.data.videos, setVideo, state);
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
  }, [state]);

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
              />
            );
          })
        : "No Videos Available"}
    </div>
  );
};

export { VideoListing };
