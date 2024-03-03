import { Link, useLocation, useParams } from "react-router-dom";
import {useFetchItem} from "~/hooks/useFetchItem";
import {Loading} from "~/components/ui/Loading";
import dayjs from "dayjs";

export function CharacterItem() {
  const params = useParams();
  const id = +params.id;
  const { item, loading } = useFetchItem(`https://rickandmortyapi.com/api/character/${id}`);
  const createdAt = dayjs(item.created).format('DD.MM.YYYY HH:mm');

  const location = useLocation();

  return (
    <div className="episodes-page">
      <div className="main-container pt-[72px]">
        <Link to={location.state} className="flex items-center gap-1 mb-5 text-rm-yellow hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
            <path
              d="M15.9993 29.3332C23.3631 29.3332 29.3327 23.3636 29.3327 15.9998C29.3327 8.63604 23.3631 2.6665 15.9993 2.6665C8.63555 2.6665 2.66602 8.63604 2.66602 15.9998C2.66602 23.3636 8.63555 29.3332 15.9993 29.3332Z"
              fill="#ebe480"
            />
            <path
              d="M17.6799 21.7069C17.4266 21.7069 17.1732 21.6135 16.9732 21.4135L12.2666 16.7069C11.8799 16.3202 11.8799 15.6802 12.2666 15.2935L16.9732 10.5869C17.3599 10.2002 17.9999 10.2002 18.3866 10.5869C18.7732 10.9735 18.7732 11.6135 18.3866 12.0002L14.3866 16.0002L18.3866 20.0002C18.7732 20.3869 18.7732 21.0269 18.3866 21.4135C18.1999 21.6135 17.9466 21.7069 17.6799 21.7069Z"
              fill="#fff"
            />
          </svg>
          Back
        </Link>
        <div className="flex gap-5">
          {loading &&
            <Loading />
          }
          <img
            src={item.image}
            alt={item.name}
          />

          <div>
            <h1 className="text-rm-yellow">Name: {item.name}</h1>
            <p className="text-rm-yellow">Gender: {item.gender}</p>
            <p className="text-rm-yellow">Species: {item.species}</p>
            <p className="text-rm-yellow">Status: {item.status}</p>
            <p className="text-rm-yellow">Created: {createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}