import {ErrorBoundary} from "src/components/ErrorBoundary/ErrorBoundary";
import { LocationItem } from "src/components/Location/LocationItem";

function Location() {
  return (
    <ErrorBoundary>
      <LocationItem />
    </ErrorBoundary>
  )
}

export default Location;
  