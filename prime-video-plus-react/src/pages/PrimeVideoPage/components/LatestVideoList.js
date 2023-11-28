import LatestVideo from "./LatestVideo";

const LatestVideoList = () => {
  // keeping the data in parent comp
  const latestVideos = [
    {
      id: 324534,
      title: "Formula 1 - Final",
      description:
        "Enjoy the final getaway of the year as Max Verstappen leads the field in Abu Dhabi",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "2 hours ago",
    },
    {
      id: 5467890,
      title: "Greatest goals in the Premier League",
      description:
        "Garnacho's third-minute wonder goal muted the protesting Everton supporters at Goodison Park.",
      thumbnailUrl: "https://placehold.co/350x250",
      category: "Sports",
      publishedOn: "5 hours ago",
    },
  ];

  return (
    <div className="row">
      <div className="col-md-3">
        <LatestVideo
          title={latestVideos[0].title}
          thumbnailUrl={latestVideos[0].thumbnailUrl}
          category={latestVideos[0].category}
          publishedOn={latestVideos[0].publishedOn}
        >
          {latestVideos[0].description}
        </LatestVideo>
      </div>
      <div className="col-md-3">
        <LatestVideo
          title={latestVideos[1].title}
          thumbnailUrl={latestVideos[1].thumbnailUrl}
          category={latestVideos[1].category}
          publishedOn={latestVideos[1].publishedOn}
        >
          {latestVideos[1].description}
        </LatestVideo>
      </div>
    </div>
  );
};

export default LatestVideoList;
