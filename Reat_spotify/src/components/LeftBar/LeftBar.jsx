import React from "react";
import "./LeftBar.css";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { SlMagnifier } from "react-icons/sl";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuDot } from "react-icons/lu";
import img from '../../assets/images/wibe_spotify.jpg';
import img2 from "../../assets/images/ryan_gosling.jpeg";
import img3 from "../../assets/images/blend_spotify.png";
import img4 from "../../assets/images/For you spotify.jpg";
import img5 from "../../assets/images/top_songs_spotify.jpeg";
import img6 from "../../assets/images/beast_mode_spotify.jpeg";
import img7 from "../../assets/images/All_Out_spotify.jpeg";
import img8 from "../../assets/images/lifesucks_spotify.jpeg";
import img9 from "../../assets/images/megahit_spotify.jpeg";
import img10 from "../../assets/images/knight.jpeg";






const LeftBar = () => {
  return (
    <>
      <div className="left">
        <div className="upper">
          <div className="home">
            <GoHomeFill className="icon" /> Home
          </div>
          <div className="search">
            <IoSearchOutline className="icon" /> Search
          </div>
        </div>

        <div className="lower">
          <div className="library">
            <div className="Your_Library">
              <LuLibrary className="icon" /> Your Library
            </div>
            <div className="arrow-icon">
              <GoPlus className="plus" />
              <FaArrowRight />
            </div>
          </div>
          <div className="playlist-content">
            <div className="playlist">Playlist</div>
            <div className="artist">Artist</div>
          </div>
          <div className="scroll">
            <div className="recent-content">
              <div className="magni">
                <SlMagnifier className="mag-icon" />
              </div>
              <div className="recent">
                Recents <TfiMenuAlt />
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Liked Songs</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  50 songs
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  // src={assets.image}
                  src={img}
                  alt=""
                />
                {/* <img src={public.image} alt="" /> */}
              </div>
              <div className="liked-content">
                <div className="liked">Wibe</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Aryan
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src= {img2}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Ryan Gosling. Literally Me</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Kaza
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img3}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Palakrakheja + Aryan</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotify
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img4}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">For you 😙🤍</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Palakrakheja
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img5}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Your Top Songs 2022</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotify
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img6}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Beast Mode</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotfy
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img7}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">All Out 2010s</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotify
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img8}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Life Sucks</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotify
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img9}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Mega Hit Mix</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Spotify
                </div>
              </div>
            </div>

            <div className="liked-songs">
              <div className="img">
                <img
                  src={img10}
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Knights</div>
                <div className="songs">
                  Playlist
                  <LuDot />
                  Aryan
                </div>
              </div>
            </div>

            <div className="art">
              <div className="img">
                <img
                  id="img2"
                  src="https://i.scdn.co/image/ab6761610000e5eb93e1fe183be0aebda170283a"
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Shawn Mendes</div>
                <div className="songs">Playlist</div>
              </div>
            </div>

            <div className="art">
              <div className="img">
                <img
                  id="img2"
                  src="https://i.scdn.co/image/ab6761610000e5eb7ffadf2671159fbfdc5c87f4"
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Camila Cabello</div>
                <div className="songs">Playlist</div>
              </div>
            </div>

            <div className="art">
              <div className="img">
                <img
                  id="img2"
                  src="https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
                  alt=""
                />
              </div>
              <div className="liked-content">
                <div className="liked">Justine Bieber</div>
                <div className="songs">Playlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
