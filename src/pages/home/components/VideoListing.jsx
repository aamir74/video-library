import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNotifications } from "reapop";
import { VideoCard } from "../../../customComponent/Card/VideoCard";
import { getAllVideos } from "../../../services";
import { getVideosData } from "../../../utils/products/productHandler";

import "./VideoListing.css";
const VideoListing = () => {
  const { notify } = useNotifications();
  const state = useSelector((store) => store.filters);
  const [video, setVideo] = useState([]);

  const getVideos = async () => {
    try {
      const videos = await getAllVideos();
      if (videos.data.videos.length) {
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
