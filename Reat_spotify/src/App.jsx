import React, { useEffect, useState } from "react";
import { getTokenFromUrl, loginUrl } from "./auth";
import SpotifyWebApi from "spotify-web-api-js";
import Songs from "./components/Songs/Songs";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Player from "./components/Player/Player";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotifyApi.setAccessToken(_token);
    }
  }, []);

  return (
    <div className="App">
      {!token ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="spotify-image"></div>
          <a
            style={{
              padding: "20px",
              backgroundColor: "#1DB954",
              color: "white",
              borderRadius: "99px",
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            href={loginUrl}
          >
            Login to Spotify
          </a>
        </div>
      ) : (
        <>
          <div
            className="spoti"
            style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}
          >
            <LeftBar />
            <Songs spotifyData={spotifyApi} />
            <RightBar spotifyData={spotifyApi} />
          </div>
          <Player spotifyData={spotifyApi} />

        </>
      )}
    </div>
  );
}

export default App;
