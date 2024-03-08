import { ErrorBoundary } from "src/components/ErrorBoundary/ErrorBoundary";
import { CharacterList } from "src/components/Character/CharacterList";

function PageCharactersList() { 
  return (
    <ErrorBoundary>
      <CharacterList />
    </ErrorBoundary>
  );
}

export default PageCharactersList;
