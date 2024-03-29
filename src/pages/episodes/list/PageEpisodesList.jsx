
import {ErrorBoundary} from "src/components/ErrorBoundary/ErrorBoundary";
import { EpisodeList } from "src/components/Episode/EpisodeList";
import './style.css';

function PageEpisodesList() {
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Episodes</h1>
        <ErrorBoundary>
          <EpisodeList />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default PageEpisodesList;
  