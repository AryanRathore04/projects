import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./Player.css";
import { SiTicktick } from "react-icons/si";
import { PiShuffle } from "react-icons/pi";
import { ImPrevious2 } from "react-icons/im";
import { FaCirclePause } from "react-icons/fa6";
import { CgPlayTrackNext } from "react-icons/cg";
import { LuRepeat } from "react-icons/lu";
import {
  FaPlay,
  FaLink,
  FaList,
  FaVolumeUp,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { RiAirplayFill } from "react-icons/ri";
import { LuMic2 } from "react-icons/lu";
import { HiMiniQueueList } from "react-icons/hi2";
import { MdOutlineDevices } from "react-icons/md";

const spotifyApi = new SpotifyWebApi();

const Player = ({ spotifyData }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [artistInfo, setArtistInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        if (spotifyData) {
          console.log("Fetching current playback state...");
          const response = await spotifyData.getMyCurrentPlaybackState();
          console.log("Current playback state response:", response);
          if (response && response.item) {
            setCurrentTrack(response.item);
            console.log("Current track set:", response.item);
            fetchArtistInfo(response.item.artists[0].id);
          } else {
            console.log("No current track playing.");
            setError("No track is currently playing.");
          }
        }
      } catch (error) {
        console.error("Error fetching the current playback state:", error);
        setError("Error fetching the current playback state.");
      }
    };

    const fetchArtistInfo = async (artistId) => {
      try {
        const artistResponse = await spotifyData.getArtist(artistId);
        console.log("Artist info response:", artistResponse);
        setArtistInfo(artistResponse);
      } catch (error) {
        console.error("Error fetching artist info:", error);
        setError("Error fetching artist info.");
      }
    };

    fetchCurrentTrack();
  }, [spotifyData]);

  if (error) return <div>{error}</div>;
  if (!currentTrack) return <div>Loading...</div>;

  return (
    <>
      <div className="player">
        <div className="main-track-info">
          <img
            className="player-img"
            src={currentTrack.album.images[0].url}
            alt={currentTrack.name}
          />
          <div className="song-name">
            <div className="track-name">{currentTrack.name}</div>
            <div className="artist-name">
              {currentTrack.artists.map((artist) => artist.name).join(", ")}
            </div>
          </div>
          <div
            className="tick"
            style={{
              backgroundColor: "#1bbe55",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <SiTicktick />
          </div>
        </div>

        {/* <p>{currentTrack.album.name}</p> */}

        {/* {artistInfo && (
          <div className="artist-info">
            <h3>About the artist</h3>
            <div className="artist-header">
              <img src={artistInfo.images[0].url} alt={artistInfo.name} />
              <div>
                <h4>{artistInfo.name}</h4>
                <p className="monthly-listeners">
                  {artistInfo.followers.total.toLocaleString()} monthly
                  listeners
                </p>
              </div>
            </div>
            <p>{artistInfo.biography || "Biography not available"}</p>
            <button className="follow-btn">Follow</button>
          </div>
        )} */}
        <div class="audio-player">
          <div className="all-btn">
            <button class="shuffle">
              <PiShuffle />
            </button>
            <button class="prev">
              <ImPrevious2 />
            </button>
            <button class="play-pause">
              <FaCirclePause
                style={{ backgroundColor: "black", color: "white" }}
              />
            </button>
            <button class="next">
              <CgPlayTrackNext />
            </button>
            <button class="repeat">
              <LuRepeat />
            </button>
          </div>
          <div className="pro">
            <span>3:09</span>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
            <span>-0:18</span>
          </div>
        </div>

        <div className="volume-player">
          <RiAirplayFill className="icon green-icon" />
          <LuMic2 className="icon" />
          <HiMiniQueueList className="icon" />
          <MdOutlineDevices className="icon" />
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
          <FaExpand className="icon" />
          <FaCompress className="icon" />
        </div>
      </div>

      {/* progress bar */}
    </>
  );
};

export default Player;
