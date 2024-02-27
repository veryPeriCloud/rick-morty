import ErrorBoundary from "../components/ErrorBoundary";
import { CharacterItem } from "../components/Character/CharacterItem";

function Character() {
  return (
    <ErrorBoundary>
      <CharacterItem />
    </ErrorBoundary>
  )
}

export default Character;
