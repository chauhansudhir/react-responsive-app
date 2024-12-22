import { useCallback, useEffect, useState } from "react";
import { fetchData } from "../utils/Utils";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchData(url);

    setData(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, isLoading, setIsLoading, setData };
}
