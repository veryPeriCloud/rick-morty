import ErrorBoundary from "../components/ErrorBoundary.js";
import { CharacterList } from "../components/Character/CharacterList.js";

function PageCharactersList() { 
  return (
    <ErrorBoundary>
      <CharacterList />
    </ErrorBoundary>
  );
}

export default PageCharactersList;
