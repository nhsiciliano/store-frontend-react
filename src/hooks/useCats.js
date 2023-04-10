import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useCats = (url) => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setState(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { state, loading, error };
};

export default useCats;