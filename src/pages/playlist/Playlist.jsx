import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNotifications } from "reapop";
import { getPlaylists } from "../../services/playlist/getPlaylists";
import { removePlaylist } from "../../services/playlist/removePlaylist";

import "./Playlist.css";

const Playlist = () => {
  const { notify } = useNotifications();
  const { auth } = useSelector((store) => store.userData);
  const [playlists, setPlaylists] = useState([]);

  const getAllPlaylists = async () => {
    try {
      if (!auth) throw { message: "User not loggeg in" };
      const res = await getPlaylists(auth);
      if (res?.data?.playlists?.length) {
        setPlaylists(res.data.playlists);
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Login to check Playlists</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  const deleteHandler = async (playlistId) => {
    try {
      const res = await removePlaylist(playlistId, auth);
      if (res?.data?.playlists?.length) setPlaylists(res.data.playlists);
      else setPlaylists([]);
      notify({
        title: <h3> Success :)</h3>,
        message: <h5>Playlist deleted</h5>,
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
    <div className="playlists">
      {playlists.length
        ? playlists.map((item) => (
            <div key={item._id}>
              <div className="card card-with-text">
                <Link to={`/playlists/${item._id}`}>
                  <img
                    className="card-img grayed-img"
                    src={
                      item?.videos[0]?.thumbnail ||
                      "https://i.ytimg.com/vi/yMiajvLzKz0/maxresdefault.jpg"
                    }
                  />
                </Link>
                <span className="overlay-text">
                  {" "}
                  <i
                    className="fa fa-play-circle-o fa-lg"
                    aria-hidden="true"
                  ></i>
                </span>
                <span className="playlist-footer">
                  <h3> {item.title}</h3>
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => deleteHandler(item._id)}
                  />
                </span>
              </div>
            </div>
          ))
        : "No Playlists Added"}
    </div>
  );
};

export { Playlist };
