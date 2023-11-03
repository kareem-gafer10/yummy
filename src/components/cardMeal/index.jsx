/* eslint-disable react/prop-types */
import React from "react";
import Styles from "./CardMeal.module.css";
import { Link } from "react-router-dom";

const CardMeal = (props) => {
  const { idMeal,strMeal, strMealThumb } = props;

  return (
     <div className="col-lg-3 col-md-6 col-sm-6 ">
     <Link to={`/${idMeal}`}>
      <div className={`${Styles.meal}  rounded-3  `}>
        <img  src={strMealThumb} alt={strMeal} />
        <div className={`${Styles.layer} 
        w-100 h-100 d-flex justify-content-center align-items-center  position-absolute `}>
          <h2 className=" text-black">{strMeal}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardMeal;