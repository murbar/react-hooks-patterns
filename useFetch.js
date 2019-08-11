import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      return;
    }
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.toString());
        setLoading(false);
      });
  }, [url]);

  return [loading, error, data];
}

export default useFetch;
