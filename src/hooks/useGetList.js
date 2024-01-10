import {useState, useRef, useCallback} from "react";
import { Link, useLocation } from "react-router-dom";
import {useFetchList} from "../hooks/useFetchList";

export function useGetList(url, category) {
	const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();

  const { loading, error, list, hasMore, message } = useFetchList(url, pageNumber);
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

	const items = list.map((item, index) => {
		if (list.length - 5 === index + 1) {
      return <li key={item.id} ref={lastNodeRef} className="flex items-center gap-5">
        <Link to={`/${category}/${item.id}`} className="text-rm-lime font-medium hover:opacity-80 transition">
          {item.name}
        </Link>
      </li>
    } else {
      return <li key={item.id} className="flex items-center gap-5">
        <Link
          to={`/${category}/${item.id}`}
          state={location.pathname}
          className="text-rm-lime font-medium hover:opacity-80 transition"
        >
          {item.id}. {item.name}
        </Link>
      </li>
    }  
	});

	return (
		<div>
			<ul className="flex flex-col pt-10 gap-6">
				{
					items
				}
			</ul>
			{ loading && <div className="pt-3 text-red-200">Loading...</div> }
			{ error && <div className="pt-10 text-red-500">{message}</div> }
		</div>
  );
}