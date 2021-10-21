import { useEffect, useState } from 'react';

export const useFetch = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'API-KEY': 'not need',
          },
        });

        if (response.ok) {
          setLoading(false);
          response.json().then((data) => {
            setData(data);
          });
        } else {
          throw new Error('Something went wrong' + response.status);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
