import { useGetList } from "src/hooks/useGetList";

export function EpisodeList() {
  const list = useGetList("https://rickandmortyapi.com/api/episode", "episodes");
  return list;
}