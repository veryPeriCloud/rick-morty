import {ErrorBoundary} from "../../../components/ErrorBoundary/ErrorBoundary";
import { LocationList } from "../../../components/Location/LocationList";

function LocationsList() {
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Locations</h1>
        <ErrorBoundary>
          <LocationList />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default LocationsList;
  