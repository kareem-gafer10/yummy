import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
const Area = () => {
  let { dataList, loading } = useFetch("list.php?a=list", "meals");

  return (
    <div className="row g-5 my-5 pb-5 meal">
      {loading ? (
        <Loader />
      ) : (
        dataList.map(({ strArea }) => (
          <div key={strArea} className="col-md-3 text-center">
            <Link className="text-white" to={`${strArea}`}>
              <BsFillHouseDoorFill size="3.5rem" />
              <h2 className="mt-2 ">{strArea}</h2>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Area;
