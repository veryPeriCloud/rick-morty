import {ErrorBoundary} from "src/components/ErrorBoundary/ErrorBoundary";
import { EpisodeItem } from "src/components/Episode/EpisodeItem";

function Episode() {
  return (
    <ErrorBoundary>
      <EpisodeItem />
    </ErrorBoundary>
  )
}
export default Episode;
  