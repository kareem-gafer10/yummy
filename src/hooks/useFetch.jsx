import { useEffect, useState } from "react";
import baseInstance from "../api/baseInstance";

const useFetch = (url, dataKey) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await baseInstance.get(`${url}`);
      setDataList(data[dataKey]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { dataList, loading };
};

export default useFetch;
