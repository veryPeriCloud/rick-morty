import {useState, useRef, useCallback} from "react";
import { Link, useLocation } from "react-router-dom";
import {useFetchList} from "src/hooks/useFetchList";

export function CharacterList() {
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  const { loading, error, list, hasMore, message } = useFetchList("https://rickandmortyapi.com/api/character", pageNumber);

  const observer = useRef();
  const lastNodeRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevState => prevState + 1)
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  }, [loading, hasMore]);

  const characterItems = list.map((character, index) => {
    if (list.length - 5 === index + 1) {
      return <li key={character.id} ref={lastNodeRef} className="flex items-center gap-5">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={character.image}
          alt={character.name}
        />
        <Link to={`/characters/${character.id}`} className="text-rm-lime font-medium hover:opacity-80 transition">
          {character.name}
        </Link>
      </li>
    } else {
      return <li key={character.id} className="flex items-center gap-5">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={character.image}
          alt={character.name}
        />
        <Link
          to={`/characters/${character.id}`}
          state={location.pathname}
          className="text-rm-lime font-medium hover:opacity-80 transition"
        >
          {character.name}
        </Link>
      </li>
    }      
  });

  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
      <h1 className="page-title">Characters</h1>
        <ul className="flex flex-col pt-10 gap-6">
          {
            characterItems
          }
        </ul>
        { loading && <div className="pt-3 text-red-200">Loading...</div> }
        { error && <div className="pt-10 text-red-500">{message}</div> }
      </div>
    </div>
  );
}