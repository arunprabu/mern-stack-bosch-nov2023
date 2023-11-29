import LatestVideoList from "./components/LatestVideoList";
import RecommendVideoList from "./components/RecommendVideoList";
import Subscription from "./components/Subscription";
import TrendingVideoList from "./components/TrendingVideoList";

const PrimeVideoPage = () => {
  return (
    <div>
      <h1>Prime Video App</h1>
      <h2>Latest Videos | Props Demo</h2>
      <LatestVideoList />

      <hr />
      <h2>Trending Videos | States and Events Demo</h2>
      <TrendingVideoList />

      <hr />
      <h2>
        Recommended Videos | States, Events, Conditional Rendering, Lists & Keys
        Demo
      </h2>
      <RecommendVideoList />


      <hr />
      <h2>Styling in React JS</h2>
      <Subscription />
    </div>
  );
};

export default PrimeVideoPage;
