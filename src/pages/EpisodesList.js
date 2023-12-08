
import { Link } from "react-router-dom";
import Episodes from "../assets/episode.json";

function EpisodesList() {
  const episodeItems = Episodes.map(episode =>
    <li key={episode.id} className="episode-item">
      <Link to={`/episodes/${episode.id}`} className="transition p-4 block w-full">
        {episode.episode}. {episode.name}
      </Link>
    </li>
  );
  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <h1 className="page-title mb-6">Episodes</h1>
        
        <ul className="flex gap-5 flex-wrap">
          {episodeItems}
        </ul>
      </div>
    </div>
  );
}

export default EpisodesList;
  