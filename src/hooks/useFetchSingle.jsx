import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseInstance from "../api/baseInstance";

const useFetchSingle = (url) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getSingleDetails = async () => {
    setLoading(true);
    const { data } = await baseInstance.get(`${url}${id}`);
    setDetails(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    getSingleDetails();
  }, []);

  return { details, loading };
};

export default useFetchSingle;
