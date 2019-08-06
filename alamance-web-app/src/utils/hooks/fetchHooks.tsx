import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response: any = await fetch(url);
    const json: any = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return {'data' : data, 'loading': loading}
}


