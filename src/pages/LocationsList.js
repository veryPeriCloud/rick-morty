import { Link } from "react-router-dom";
import Locations from "../assets/location.json";
import ErrorBoundary from "../components/ErrorBoundary";

function LocationsList() {
  const locationItems = Locations.map(loc =>
    <li key={loc.id} className="flex items-center gap-5">
      <Link to={`/locations/${loc.id}`} className="text-rm-lime font-medium hover:opacity-80 transition">
        {loc.id}. {loc.name}
      </Link>
    </li>
  );
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Locations</h1>
        <ErrorBoundary>
          {locationItems}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default LocationsList;
  