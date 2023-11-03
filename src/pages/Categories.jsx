import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../components/categoryCard";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const Categories = () => {
  let { dataList, loading } = useFetch("categories.php", "categories");

  return (
    <div className="row g-5 my-5 pb-5 meal">
      {loading ? (
        <Loader />
      ) : (
        dataList.map((category) => (
          <CategoryCard key={category.idCategory} {...category} />
        ))
      )}
    </div>
  );
};

export default Categories;
