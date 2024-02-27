import ErrorBoundary from "../components/ErrorBoundary";
import { EpisodeItem } from "../components/Episode/EpisodeItem";

function Episode() {
  return (
    <ErrorBoundary>
      <EpisodeItem />
    </ErrorBoundary>
  )
}
export default Episode;
  