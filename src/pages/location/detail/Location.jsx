import {ErrorBoundary} from "../../../components/ErrorBoundary/ErrorBoundary";
import { LocationItem } from "../../../components/Location/LocationItem";

function Location() {
  return (
    <ErrorBoundary>
      <LocationItem />
    </ErrorBoundary>
  )
}

export default Location;
  