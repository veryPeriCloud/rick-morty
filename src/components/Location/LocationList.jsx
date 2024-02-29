import { useGetList } from "../../hooks/useGetList";

export function LocationList() {
  const list = useGetList("https://rickandmortyapi.com/api/location", "locations");
  return list;
}