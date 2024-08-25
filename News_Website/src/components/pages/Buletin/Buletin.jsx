import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Buletin.css";
import { LuDot } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Buletin = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("..//..//..//..//public/newData.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="craft">
          <h5 style={{ padding: "0", margin: "0" }}>WELCOME TO BULETIN</h5>
          <div className="lower-craft">
            <h2 style={{ padding: "0", margin: "0" }}>
              Craft narratives✍🏻 that ignite{" "}
              <span style={{ fontSize: "27px" }}>inspiration</span>💡,{" "}
              <span style={{ fontSize: "27px" }}>knowledge</span>📕, and{" "}
              <span style={{ fontSize: "27px" }}>entertainment</span>🎬
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div className="featured_article">
          {data.featured_article && (
            <div className="featured">
              <img
                width={"510px"}
                height={"300px"}
                style={{ borderRadius: "10px" }}
                src={data.featured_article.imgSrc}
                alt=""
              />
              <div className="info">
                <div className="topic-name">
                  <img
                    className="profile-image"
                    src={data.featured_article.topic_profile}
                    alt=""
                  />
                  <small>
                    {data.featured_article.topic}
                    <LuDot />
                    {data.featured_article.date}
                  </small>
                </div>

                <h2 style={{ paddingRight: "26px" }}>
                  <Link
                    className="heading"
                    to={`/article/${data.featured_article.id}`}
                  >
                    {data.featured_article.title}
                  </Link>
                </h2>
                <p className="article-description">
                  {data.featured_article.description}
                </p>
                <small className="article-meta">
                  <span>{data.featured_article.category}</span> <LuDot />
                  {"  "}
                  {data.featured_article.reading_time}
                </small>
              </div>
            </div>
          )}
        </div>

        <div className="latest_news">
          <div className="latest_news_header">
            <h1 className="heading_latest_news">Latest News</h1>
            <div className="see_all">
              <p>See all</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
          <div className="latest_news_content">
            {data.latest_news &&
              data.latest_news.map((article) => (
                <div className="latest_news_item" key={article.id}>
                  <div className="image">
                    <img
                      className="article-image"
                      src={article.imgSrc}
                      alt="Article"
                    />
                  </div>
                  <div style={{ marginTop: "10px" }} className="topic-name">
                    <img
                      className="profile-image"
                      src={article.topic_profile}
                      alt="Profile"
                    />
                    <small>
                      {article.topic}
                      <LuDot />
                      {article.date}
                    </small>
                  </div>
                  <h2 className="article-title">
                    <Link className="superman" to={`/article/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="article-description">{article.description}</p>
                  <small className="article-meta">
                    <span>{article.category}</span> - {article.reading_time}
                  </small>
                </div>
              ))}
          </div>
        </div>

        <div className="buletin_story">
          <div className="latest_news_header">
            <h1 className="heading_latest_news">Buletin Story</h1>
            <div className="see_all">
              <p>See all</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
          <div className="story-con">
            {data.bulletin_story &&
              data.bulletin_story.slice(0, 9).map((article) => (
                <div className="story_container" key={article.id}>
                  <div className="story">
                    <img className="story-image" src={article.img_url} alt="" />
                  </div>
                  <p className="story-username">{article.username}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="must_read">
          <div className="latest_news_header">
            <h1 className="heading_latest_news">Must Read</h1>
            <div className="see_all">
              <p>See all</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>

          <div className="must-read-content">
            <div className="ukraines">
              {data.must_read &&
                data.must_read.slice(0, 1).map((article) => (
                  <div key={article.id}>
                    <img src={article.imgSrc} alt="" />
                    <div className="infor">
                      <div style={{ marginTop: "10px" }} className="topic-name">
                        <img
                          className="profile-image"
                          src={article.topic_profile}
                          alt=""
                        />
                        <small>
                          {article.topic}
                          <LuDot />
                          {article.date}
                        </small>
                      </div>
                      <h2>
                        <Link
                          className="superman"
                          to={`/article/${article.id}`}
                        >
                          {article.title}
                        </Link>
                      </h2>
                      <p className="ukranins-dis">{article.description}</p>
                      <small>
                        <span> {article.category}</span> -{" "}
                        {article.reading_time}
                      </small>
                    </div>
                  </div>
                ))}
            </div>

            <div className="taylor">
              {data.must_read && (
                <div className="taylor-swift">
                  {data.must_read.slice(1, 2).map((article) => (
                    <div key={article.id}>
                      <div className="taylorig">
                        <img
                          className="taylor-img"
                          src={article.imgSrc}
                          alt=""
                        />
                      </div>
                      <div className="informa">
                        <div
                          style={{ marginTop: "10px" }}
                          className="topic-name"
                        >
                          <img
                            className="profile-image"
                            src={article.topic_profile}
                            alt=""
                          />
                          <small>
                            {article.topic}
                            <LuDot />
                            {article.date}
                          </small>
                        </div>
                        <h2 className="taylor-head">
                          <Link
                            className="superman"
                            to={`/article/${article.id}`}
                          >
                            {article.title}
                          </Link>
                        </h2>
                        <p className="ukranins-discrip">
                          {article.description}
                        </p>
                        <small>
                          {article.category} - {article.reading_time}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="football">
              {data.must_read &&
                data.must_read.slice(2, 4).map((article) => (
                  <div key={article.id}>
                    <img className="foot" src={article.imgSrc} alt="" />
                    <div className="informati">
                      <div style={{ marginTop: "10px" }} className="topic-name">
                        <img
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                          }}
                          className="profile-image"
                          src={article.topic_profile}
                          alt=""
                        />
                        <small>
                          {article.topic}
                          <LuDot />
                          {article.date}
                        </small>
                      </div>
                      <h2 style={{ color: "#111111" }}>
                        <Link
                          className="superman"
                          to={`/article/${article.id}`}
                        >
                          {article.title}
                        </Link>
                      </h2>
                      {/* <p className="ukranins-dis">{article.description}</p> */}
                      <small>
                        <span> {article.category}</span> -{" "}
                        {article.reading_time}
                      </small>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="Editors-pick">
          <div className="latest_news_header">
            <h1 className="heading_latest_news">Editors Pick</h1>
            <div className="see_all">
              <p>See all</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
          <div className="editors-content">
            {data.editors_pick &&
              data.editors_pick.map((article) => (
                <div className="editors-item" key={article.id}>
                  <img
                    className="editors-image"
                    src={article.imgSrc}
                    alt="Article"
                  />
                  <div className="article-details">
                    <div className="topic-name">
                      <img
                        className="profile-image"
                        src={article.topic_profile}
                        alt="Profile"
                      />
                      <small style={{ fontFamily: "Roboto" }}>
                        {article.topic}
                        <LuDot />
                        {article.date}
                      </small>
                    </div>
                    <h2 className="article-title">
                      <Link className="superman" to={`/article/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="article-description">{article.description}</p>
                    <small className="article-meta">
                      <span style={{ color: "white", fontWeight: "400" }}>
                        {article.category}
                      </span>{" "}
                      - {article.reading_time}
                    </small>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="additional_news latest_news">
          <div className="latest_news_content">
            {data.additional_news &&
              data.additional_news.map((article) => (
                <div className="latest_news_item" key={article.id}>
                  <div className="image">
                    <img
                      className="article-image"
                      src={article.imgSrc}
                      alt="Article"
                    />
                  </div>
                  <div style={{ marginTop: "10px" }} className="topic-name">
                    <img
                      className="profile-image"
                      src={article.topic_profile}
                      alt="Profile"
                    />
                    <small>
                      {article.topic}
                      <LuDot />
                      {article.date}
                    </small>
                  </div>
                  <h2 className="article-title">
                    <Link className="superman" to={`/article/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <small className="article-meta">
                    <span>{article.category}</span> - {article.reading_time}
                  </small>
                </div>
              ))}
          </div>
        </div>

        <div className="bussiness_sports">
          <div className="business_news latest_news">
            <div className="latest_news_header">
              <h1 className="heading_latest_news">Business</h1>
              <div className="see_all">
                {/* <p>See all</p> */}
                <span>
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
            <div className="latest_news_content">
              {data.business &&
                data.business.map((article) => (
                  <div className="latest_news_item" key={article.id}>
                    <div className="image">
                      <img
                        className="article-image"
                        src={article.imgSrc}
                        alt="Article"
                      />
                    </div>
                    <div style={{ marginTop: "10px" }} className="topic-name">
                      <img
                        className="profile-image"
                        src={article.topic_profile}
                        alt="Profile"
                      />
                      <small>
                        {article.topic}
                        <LuDot />
                        {article.date}
                      </small>
                    </div>
                    <h2 className="article-title">
                      <Link className="superman" to={`/article/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <small className="article-meta">
                      <span>{article.category}</span> - {article.reading_time}
                    </small>
                  </div>
                ))}
            </div>
          </div>

          <div className="Sports_news latest_news">
            <div className="latest_news_header">
              <h1 className="heading_latest_news">Sports News</h1>
              <div className="see_all">
                {/* <p>See all</p> */}
                <span>
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
            <div className="latest_news_content">
              {data.sport_news &&
                data.sport_news.map((article) => (
                  <div className="latest_news_item" key={article.id}>
                    <div className="image">
                      <img
                        className="article-image"
                        src={article.imgSrc}
                        alt="Article"
                      />
                    </div>
                    <div style={{ marginTop: "10px" }} className="topic-name">
                      <img
                        className="profile-image"
                        src={article.topic_profile}
                        alt="Profile"
                      />
                      <small>
                        {article.topic}
                        <LuDot />
                        {article.date}
                      </small>
                    </div>
                    <h2 className="article-title">
                      <Link className="superman" to={`/article/${article.id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <small className="article-meta">
                      <span>{article.category}</span> - {article.reading_time}
                    </small>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="email_box">
            <div className="lefty">
              <h5 style={{ padding: "0", margin: "0" }}>GET FIRST UPDATE</h5>
              <div className="lower-craft2">
                <h2 style={{ padding: "0", margin: "0" }}>
                  Get the news in front line by{" "}
                  <span style={{ fontSize: "27px" }}>Subscribe✍🏻</span> our
                  latest updates
                </h2>
              </div>
            </div>

            <div className="righty">
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-section">
            <div className="uperbul">
              <h4 style={{color:"#e20000",fontSize:"1.8rem"}}>Buletin</h4>
              <p>
                Craft narratives that ignite inspiration, knowledge, and
                entertainment.
              </p>
              <div className="social-icons">
                <div className="parent-icos">
                  <FaFacebook className="icos" />
                </div>
                <div className="parent-icos">
                  <FaLinkedin className="icos" />
                </div>
                <div className="parent-icos">
                  <AiFillTwitterCircle className="icos" />
                </div>
                <div className="parent-icos">
                  <AiFillInstagram className="icos" />
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Copyright © 2023 Buletin.</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h5>Business</h5>
              <ul>
                <li>
                  <a href="/business/startup">Startup</a>
                </li>
                <li>
                  <a href="/business/employee">Employee</a>
                </li>
                <li>
                  <a href="/business/success">Success</a>
                </li>
                <li>
                  <a href="/business/videos">Videos</a>
                </li>
                <li>
                  <a href="/business/markets">Markets</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Technology</h5>
              <ul>
                <li>
                  <a href="/technology/innovate">Innovate</a>
                </li>
                <li>
                  <a href="/technology/gadget">Gadget</a>
                </li>
                <li>
                  <a href="/technology/innovative-cities">Innovative Cities</a>
                </li>
                <li>
                  <a href="/technology/upstarts">Upstarts</a>
                </li>
                <li>
                  <a href="/technology/future-tech">Future Tech</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Travel</h5>
              <ul>
                <li>
                  <a href="/travel/destinations">Destinations</a>
                </li>
                <li>
                  <a href="/travel/food-drink">Food & Drink</a>
                </li>
                <li>
                  <a href="/travel/stay">Stay</a>
                </li>
                <li>
                  <a href="/travel/news">News</a>
                </li>
                <li>
                  <a href="/travel/videos">Videos</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Sports</h5>
              <ul>
                <li>
                  <a href="/sports/football">Football</a>
                </li>
                <li>
                  <a href="/sports/tennis">Tennis</a>
                </li>
                <li>
                  <a href="/sports/golf">Golf</a>
                </li>
                <li>
                  <a href="/sports/motorsports">Motorsports</a>
                </li>
                <li>
                  <a href="/sports/esports">Esports</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Entertainment</h5>
              <ul>
                <li>
                  <a href="/entertainment/movies">Movies</a>
                </li>
                <li>
                  <a href="/entertainment/artist">Artist</a>
                </li>
                <li>
                  <a href="/entertainment/television">Television</a>
                </li>
                <li>
                  <a href="/entertainment/influencer">Influencer</a>
                </li>
                <li>
                  <a href="/entertainment/viral">Viral</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Features</h5>
              <ul>
                <li>
                  <a href="/features/as-equals">As Equals</a>
                </li>
                <li>
                  <a href="/features/call-to-earth">Call to Earth</a>
                </li>
                <li>
                  <a href="/features/freedom-project">Freedom Project</a>
                </li>
                <li>
                  <a href="/features/inside-asia">Inside Asia</a>
                </li>
                <li>
                  <a href="/features/2-degrees">2 Degrees</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Weather</h5>
              <ul>
                <li>
                  <a href="/weather/climate">Climate</a>
                </li>
                <li>
                  <a href="/weather/storm-tracker">Storm Tracker</a>
                </li>
                <li>
                  <a href="/weather/wildfire-tracker">Wildfire Tracker</a>
                </li>
                <li>
                  <a href="/weather/earthquake">Earthquake</a>
                </li>
                <li>
                  <a href="/weather/video">Video</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>More</h5>
              <ul>
                <li>
                  <a href="/more/design">Design</a>
                </li>
                <li>
                  <a href="/more/mentorship">Mentorship</a>
                </li>
                <li>
                  <a href="/more/investment">Investment</a>
                </li>
                <li>
                  <a href="/more/work-for-buletin">Work for Buletin</a>
                </li>
                <li>
                  <a href="/more/support-us">Support Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buletin;
