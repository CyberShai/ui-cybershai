import { useState, useEffect } from "react";

export const useFetchApi = () => {
  const URL =
    "http://gateway.marvel.com/v1/public/comics?ts=7&apikey=ae7d355fc025d92bc850f19728ca07cf&hash=8531700fcc4c7ed16f6aa8f35f6c1665";

  const [data, setData] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        setData({
          loading: false,
          error: null,
          data: result.data.results,
        });
      });
  }, []);

  return data;
};
