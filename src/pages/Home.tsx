import { SearchBox, Header } from "../components";
import RepoCard from "../components/RepoCard";

const Home: React.FC = () => (
  <div className="w-full h-full flex flex-col justify-center">
    <div className="w-11/12 md:w-5/12 p-5 mx-auto">
      <Header />
      <SearchBox />
    </div>
    <ul className="w-11/12 md:w-5/12 p-5 mx-auto">
      {Array(10)
        .fill(null)
        .map((i) => (
          <RepoCard />
        ))}
    </ul>
  </div>
);

export default Home;
