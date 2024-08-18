import axios from 'axios';
import { useEffect, useState } from 'react';
export const useChangeTitle = (content) => {
  useEffect(() => {
    document.title = content + 'cloudempire.tech';
  }, [content]);
};

export const dateFormat = (date) => {
  const d = new Date(date);
  return d.toDateString();
};

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message + ' Please check your connection');
      }
    })();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
