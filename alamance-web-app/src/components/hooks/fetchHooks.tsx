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

export function useFileUpload(url: string, upFile: File) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  let formData = new FormData();
  formData.append('pafile.xlsx', upFile)

  async function fetchUrl() {
    const response: any = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const downFile: Blob = await response.blob();

    setData(downFile);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return {'data' : data, 'loading': loading}
}

