import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./RightBar.css";

const spotifyApi = new SpotifyWebApi();

const RightBar = ({ spotifyData }) => {
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
    <div className="right-bar">
      <img  src={currentTrack.album.images[0].url} alt={currentTrack.name} />
      <h2>{currentTrack.name}</h2>
      <h3>{currentTrack.artists.map((artist) => artist.name).join(", ")}</h3>
      {/* <p>{currentTrack.album.name}</p> */}

      {artistInfo && (
        <div className="artist-info">
          <h3>About the artist</h3>
          <div className="artist-header">
            <img src={artistInfo.images[0].url} alt={artistInfo.name} />
            <div>
              <h4>{artistInfo.name}</h4>
              <p className="monthly-listeners">
                {artistInfo.followers.total.toLocaleString()} monthly listeners
              </p>
            </div>
          </div>
          <p>{artistInfo.biography || "Biography not available"}</p>
          <button className="follow-btn">Follow</button>
        </div>
      )}
    </div>
  );
};

export default RightBar;
