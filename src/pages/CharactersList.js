import { Link } from "react-router-dom";
import Characters from "../assets/characters.json";

function CharactersList() {

  const characterItems = Characters.map(character =>
    <li key={character.id} className="flex items-center gap-5">
      <img
        className="w-[60px] h-[60px] rounded-full"
        src={character.image}
        alt={character.name}
      />
      <Link to={`/characters/${character.id}`} className="text-rm-lime font-medium hover:opacity-80 transition">
        {character.name}
      </Link>
    </li>
  );

  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
      <h1 className="page-title">Characters</h1>
        <ul className="flex flex-col pt-10 gap-6">{characterItems}</ul>
      </div>
    </div>
  );
}

export default CharactersList;
