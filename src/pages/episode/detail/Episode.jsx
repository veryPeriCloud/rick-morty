import {ErrorBoundary} from "../../../components/ErrorBoundary/ErrorBoundary";
import { EpisodeItem } from "../../../components/Episode/EpisodeItem";

function Episode() {
  return (
    <ErrorBoundary>
      <EpisodeItem />
    </ErrorBoundary>
  )
}
export default Episode;
  