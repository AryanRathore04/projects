import React, { useEffect, useState } from "react";
import "./Songs.css";
import { FaChevronLeft, FaChevronRight, FaPlayCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import img11 from "../../assets/images/ryan_gosling.jpeg";
import img12 from "../../assets/images/wibe_spotify.jpg";
import img13 from "../../assets/images/snap_x_barrishen.jpeg";
import img14 from "../../assets/images/lifesucks_spotify.jpeg";
import img15 from "../../assets/images/eminem_spotify.jpeg";
import img16 from "../../assets/images/nightstroms_spotify.jpeg";
import img17 from "../../assets/images/knight.jpeg";
import img18 from "../../assets/images/daily1_spotify.jpeg";
import { GrInstallOption } from "react-icons/gr";

const Songs = ({ spotifyData }) => {
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryPlaylists, setCategoryPlaylists] = useState({});
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [showAllPlaylists, setShowAllPlaylists] = useState(false);
  const [showAllRecommended, setShowAllRecommended] = useState(false);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState({});

  // const [upper2Color, setUpper2Color] = useState(
  //   "linear-gradient(180deg, rgba(54, 17, 11, 1) 0%, rgba(18, 18, 18, 1) 100%)"
  // );

  const [hoveredPlaylist, setHoveredPlaylist] = useState(false);

  useEffect(() => {
    if (spotifyData) {
      // Fetch saved tracks
      spotifyData
        .getMySavedTracks()
        .then((response) => {
          setTracks(response.items);
        })
        .catch((error) => {
          console.error("Error fetching tracks:", error);
        });

      // Fetch user playlists
      spotifyData
        .getUserPlaylists()
        .then((response) => {
          setPlaylists(response.items);
        })
        .catch((error) => {
          console.error("Error fetching playlists:", error);
        });

      // Fetch recommended tracks
      spotifyData
        .getRecommendations({
          seed_artists: ["3TVXtAsR1Inumwj472S9r4"], // Example seed artist ID
          limit: 20,
        })
        .then((response) => {
          setRecommendedTracks(response.tracks);
        })
        .catch((error) => {
          console.error("Error fetching recommended tracks:", error);
        });

      // Fetch featured playlists
      spotifyData
        .getFeaturedPlaylists()
        .then((response) => {
          setFeaturedPlaylists(response.playlists.items);
        })
        .catch((error) => {
          console.error("Error fetching featured playlists:", error);
        });

      // Fetch categories
      spotifyData
        .getCategories()
        .then((response) => {
          setCategories(response.categories.items);
          const initialShowAllCategoriesState = {};
          response.categories.items.forEach((category) => {
            initialShowAllCategoriesState[category.id] = false;
          });
          setShowAllCategories(initialShowAllCategoriesState);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [spotifyData]);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((category) => {
        spotifyData
          .getCategoryPlaylists(category.id)
          .then((response) => {
            setCategoryPlaylists((prevState) => ({
              ...prevState,
              [category.id]: response.playlists.items,
            }));
          })
          .catch((error) => {
            console.error(
              `Error fetching playlists for category ${category.id}:`,
              error
            );
          });
      });
    }
  }, [categories, spotifyData]);

  return (
    <div className={`container ${hoveredPlaylist ? "hovered" : ""}`}>
      <div
        className="upper2"
        //  style={{ background: upper2Color}}

        // style={{ background: upper2Color }}
      >
        <div className="header">
          <div className="arr">
            <FaChevronLeft className="left-right" />
            <FaChevronRight className="left-right" />
          </div>
          <div className="explore-content">
            <div className="explore">Explore Premium</div>
            <div className="install">
              <div className="install-icon">
                <GrInstallOption />
              </div>
              Install App
            </div>
            <div className="bell">
              <GoBell />
            </div>
            <div className="profile">
              <img src={img11} alt="" />
            </div>
          </div>
        </div>

        <div className="all-content">
          <div className="all">All</div>
          <div className="music">Music</div>
          <div className="podcasts">Podcasts</div>
        </div>
        <div className="My-songs">
          <div className="left-my-songs">
            <div
              className="my-playlist helper"
              // onMouseEnter={() =>
              //   setUpper2Color(
              //     "linear-gradient(180deg, rgba(15,56,52,1) 0%, rgba(31,29,28,1) 100%);"
              //   )
              // }
              // onMouseLeave={() =>
              //   setUpper2Color(
              //     "linear-gradient(180deg, rgba(54, 17, 11, 1) 0%, rgba(18, 18, 18, 1) 100%)"
              //   )
              // }
            >
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img12} alt="" />
                </div>
                <span>Wibe</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>

            <div className="my-playlist helper">
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img13} alt="" />
                </div>
                <span>Snap x baarishan</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>

            <div className="my-playlist helper">
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img14} alt="" />
                </div>
                <span>Life Sucks</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>
          </div>
          <div className="right-my-songs">
            <div className="my-playlist helper">
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img15} alt="" />
                </div>
                <span>EMINEM BEST OF</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>

            <div className="my-playlist helper">
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img16} alt="" />
                </div>
                <span>Nightstroms</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>

            <div className="my-playlist helper">
              <div className="left-my-playlist">
                <div className="image99">
                  <img src={img17} alt="" />
                </div>
                <span>Knights Playlist</span>
              </div>
              <div className="right-my-playlist">
                <FaPlayCircle className="play" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lower2">
        <div className="lower-content">
          <div className="title">
            <div className="title-name">Made For You</div>
            <div
              className="showAll"
              onClick={() => setShowAllPlaylists(!showAllPlaylists)}
            >
              {showAllPlaylists ? "Show less" : "Show all"}
            </div>
          </div>
          <div className="card-songs">
            <div className="card-content-main">
              {(showAllPlaylists ? playlists : playlists.slice(0, 4)).map(
                (playlist) => (
                  <div className="card" key={playlist.id}>
                    <img
                      src={playlist.images[0]?.url || img11}
                      alt=""
                      className="card-image"
                    />
                    <div className="card-content">
                      <h3 className="card-title">{playlist.name}</h3>
                      <p className="card-description">{playlist.description}</p>
                    </div>
                    <button className="play-button">&#9658;</button>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="title">
            <div className="title-name">Your top mixes</div>
            <div
              className="showAll"
              onClick={() => setShowAllRecommended(!showAllRecommended)}
            >
              {showAllRecommended ? "Show less" : "Show all"}
            </div>
          </div>
          <div className="card-songs">
            <div className="card-content-main">
              {(showAllRecommended
                ? recommendedTracks
                : recommendedTracks.slice(0, 4)
              ).map((track) => (
                <div className="card" key={track.id}>
                  <img
                    src={track.album.images[0]?.url || img12}
                    alt=""
                    className="card-image"
                  />
                  <div className="card-content">
                    <h3 className="card-title">{track.name}</h3>
                    <p className="card-description">{track.artists[0]?.name}</p>
                  </div>
                  <button className="play-button">&#9658;</button>
                </div>
              ))}
            </div>
          </div>

          <div className="title">
            <div className="title-name">Featured Playlists</div>
            <div
              className="showAll"
              onClick={() => setShowAllFeatured(!showAllFeatured)}
            >
              {showAllFeatured ? "Show less" : "Show all"}
            </div>
          </div>
          <div className="card-songs">
            <div className="card-content-main">
              {(showAllFeatured
                ? featuredPlaylists
                : featuredPlaylists.slice(0, 4)
              ).map((playlist) => (
                <div className="card" key={playlist.id}>
                  <img
                    src={playlist.images[0]?.url || img13}
                    alt=""
                    className="card-image"
                  />
                  <div className="card-content">
                    <h3 className="card-title">{playlist.name}</h3>
                    <p className="card-description">{playlist.description}</p>
                  </div>
                  <button className="play-button">&#9658;</button>
                </div>
              ))}
            </div>
          </div>

          {categories.map((category) => (
            <div key={category.id}>
              <div className="title">
                <div className="title-name">{category.name}</div>
                <div
                  className="showAll"
                  onClick={() =>
                    setShowAllCategories((prevState) => ({
                      ...prevState,
                      [category.id]: !prevState[category.id],
                    }))
                  }
                >
                  {showAllCategories[category.id] ? "Show less" : "Show all"}
                </div>
              </div>
              <div className="card-songs">
                <div className="card-content-main">
                  {(showAllCategories[category.id]
                    ? categoryPlaylists[category.id]
                    : (categoryPlaylists[category.id] || []).slice(0, 4)
                  ).map((playlist) => (
                    <div className="card" key={playlist.id}>
                      <img
                        src={playlist.images[0]?.url || img18}
                        alt=""
                        className="card-image"
                      />
                      <div className="card-content">
                        <h3 className="card-title">{playlist.name}</h3>
                        <p className="card-description">
                          {playlist.description}
                        </p>
                      </div>
                      <button className="play-button">&#9658;</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
