import ErrorBoundary from "../components/ErrorBoundary";
import { useGetList } from "../hooks/useGetList";

function List() {
  const list = useGetList("https://rickandmortyapi.com/api/location", "locations");
  return list;
}

function LocationsList() {
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Locations</h1>
        <ErrorBoundary>
          <List />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default LocationsList;
  