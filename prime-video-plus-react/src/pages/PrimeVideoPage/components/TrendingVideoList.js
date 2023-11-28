import { useState } from "react";

const TrendingVideoList = () => {
  // state = component wide updateable data
  const [resolution, setResolution] = useState("HD");
  const [trendingVideos, setTrendingVideos] = useState([
    {
      id: 87654,
      title: "Man Vs Wild",
      description: "A Wild adventure show by Bear Grylls",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "2 days ago",
    },
    {
      id: 987654,
      title: "Planet Earth II",
      description: "A show hosted by David Attenborough on BBC Earth",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Infotainment",
      publishedOn: "3 days ago",
    },
  ]);

  console.log(trendingVideos);

  const handleChangeResolution = () => {
    console.log("Clicked");
    // whenever the state is updated, UI will also be updated
    setResolution("4K");
  };

  return (
    <div className="row">
      <h4>
        Enjoy watching the Trending shows in {resolution} |{" "}
        <button
          className="btn btn-primary btn-sm"
          onClick={handleChangeResolution}
        >
          Change Resolution
        </button>
      </h4>
      <div className="col-md-3">
        <div className="card">
          <img
            src={trendingVideos[0].thumbnailUrl}
            className="card-img-top"
            alt={trendingVideos[0].title}
          />
          <div className="card-body">
            <h5 className="card-title">{trendingVideos[0].title}</h5>
            <p className="card-text">{trendingVideos[0].description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{trendingVideos[0].category}</li>
            <li className="list-group-item">{trendingVideos[0].publishedOn}</li>
          </ul>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card">
          <img
            src={trendingVideos[1].thumbnailUrl}
            className="card-img-top"
            alt={trendingVideos[1].title}
          />
          <div className="card-body">
            <h5 className="card-title">{trendingVideos[1].title}</h5>
            <p className="card-text">{trendingVideos[1].description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{trendingVideos[1].category}</li>
            <li className="list-group-item">{trendingVideos[1].publishedOn}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideoList;
