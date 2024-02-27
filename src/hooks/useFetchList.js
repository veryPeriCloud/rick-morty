import axios from "axios";
import { useEffect, useState } from "react"

export function useFetchList(url, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("")
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setMessage("");

    axios({
      method: "GET",
      url: url,
      params: {
        page: pageNumber
      },
    }).then((res) => {
      setList(prevState => {
        return [...prevState, ...res.data.results]
      });

      setHasMore(res.data.results.length > 0);
      setLoading(false);
    }).catch(e => {
      setError(true);
      setMessage(e.message)
      console.error(e.message);
    })
  }, [pageNumber, url]);

  return {
    loading,
    error,
    list,
    hasMore,
    message
  }
}