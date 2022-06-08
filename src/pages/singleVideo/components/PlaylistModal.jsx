import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNotifications } from "reapop";
import { addPlaylist } from "../../../services/playlist/addPlaylist";
import { addVideoToPlaylist } from "../../../services/playlist/addVideoToPlaylist";
import { getPlaylists } from "../../../services/playlist/getPlaylists";
import { removeVideoFromPlaylist } from "../../../services/playlist/removeVideoFromPlaylist";

const PlaylistModal = ({ setModal, video }) => {
  const { notify } = useNotifications();
  const { auth } = useSelector((store) => store.userData);

  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const handleAddPlaylist = async () => {
    try {
      if (!playlistName) return;
      let playlistAlreadyExist = false;
      playlists.map((item) => {
        if (item.title === playlistName) playlistAlreadyExist = true;
      });
      if (playlistAlreadyExist) return;
      const res = await addPlaylist({ title: playlistName }, auth);
      if (res.status === 201) {
        setPlaylists(res.data.playlists);
        setPlaylistName("");
        notify({
          title: <h3> Success :)</h3>,
          message: <h5>Playlist added</h5>,
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

  const getAllPlaylists = async () => {
    try {
      const res = await getPlaylists(auth);

      if (res?.data?.playlists?.length) {
        setPlaylists(res.data.playlists);
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

  const handlePlaylistAction = async (e, playlistId) => {
    try {
      let res;
      if (e.target.checked)
        res = await addVideoToPlaylist(playlistId, video, auth);
      else res = await removeVideoFromPlaylist(playlistId, video._id, auth);
      const updatedPlaylist = playlists.map((item) =>
        item._id === res.data.playlist._id
          ? { ...item, videos: res.data.playlist.videos }
          : item
      );
      setPlaylists(updatedPlaylist);
      notify({
        title: <h3> Success :)</h3>,
        message: <h5>Playlist Updated</h5>,
        status: "success",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
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
    getAllPlaylists();
  }, []);

  return (
    <div className="modal-box">
      <div className="backdrop">
        <div className="card text-card modal">
          <div className="card-details">
            <div className="modal-header">
              <h5 className="h5 bold">Save</h5>
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={() => setModal(false)}
              />
            </div>
            {playlists.length
              ? playlists.map((item) => {
                  const isInPlaylist = item.videos?.some(
                    (item) => item._id === video._id
                  );
                  return (
                    <div key={item._id}>
                      <input
                        className="playlist-input"
                        type="checkbox"
                        id={item._id}
                        name={item.title}
                        value="Men"
                        onChange={(e) => handlePlaylistAction(e, item._id)}
                        checked={isInPlaylist}
                      />
                      <label htmlFor={item._id}> {item.title}</label>
                      <br />
                    </div>
                  );
                })
              : ""}
            <input
              id="searchbar"
              className="textbox playlist-input"
              type="email"
              placeholder="Enter playlist name"
              onChange={(e) => setPlaylistName(e.target.value)}
              value={playlistName}
            />

            <div className="card-btn-center">
              <button
                className="btn-primary btn-bg-color left-margin"
                onClick={handleAddPlaylist}
              >
                Create New Playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
