import { ErrorBoundary } from "src/components/ErrorBoundary/ErrorBoundary";
import { CharacterItem } from "src/components/Character/CharacterItem";

function Character() {
  return (
    <ErrorBoundary>
      <CharacterItem />
    </ErrorBoundary>
  )
}

export default Character;
