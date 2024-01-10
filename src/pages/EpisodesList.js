
import ErrorBoundary from "../components/ErrorBoundary";
import { useGetList } from "../hooks/useGetList";

function List() {
  const list = useGetList("https://rickandmortyapi.com/api/episode", "episodes");
  return list;
}

function EpisodesList() {
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Episodes</h1>
        <ErrorBoundary>
          <List />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default EpisodesList;
  