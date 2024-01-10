import axios from "axios";
import { useEffect, useState } from "react"

export function useFetchItem(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: url,
    }).then((res) => {
      setItem(res.data);
      setLoading(false);
    }).catch(e => {
      setError(true)
    })
  }, [url]);

  return {
    loading,
    error,
    item,
  }
}