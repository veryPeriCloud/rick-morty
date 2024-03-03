import { ErrorBoundary } from "~/components/ErrorBoundary/ErrorBoundary";
import { CharacterList } from "~/components/Character/CharacterList";

function PageCharactersList() { 
  return (
    <ErrorBoundary>
      <CharacterList />
    </ErrorBoundary>
  );
}

export default PageCharactersList;
