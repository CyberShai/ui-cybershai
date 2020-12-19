import { useState, useEffect } from "react";

export const useFetchApi = (endpoint) => {
  const URL = `https://staging.cybershai.rocks/${endpoint}`;

  const [data, setData] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        console.log("data del bryan", result);
        setData({
          loading: false,
          error: null,
          data: result.data.vacancies,
        });
      });
  }, []);

  return data;
};
