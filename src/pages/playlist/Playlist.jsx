import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPlaylists } from "../../services/playlist/getPlaylists";
import { removePlaylist } from "../../services/playlist/removePlaylist";

import "./Playlist.css";

const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const getAllPlaylists = async () => {
    try {
      const res = await getPlaylists();
      console.log(res);
      if (res?.data?.playlists?.length) {
        setPlaylists(res.data.playlists);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (playlistId) => {
    try {
      const res = await removePlaylist(playlistId);
      console.log(res.data.playlists.length);
      if (res?.data?.playlists?.length) setPlaylists(res.data.playlists);
      else setPlaylists([]);
    } catch (err) {
      console.log(err);
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
