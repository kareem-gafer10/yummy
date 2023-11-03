/* eslint-disable react/prop-types */
import React from "react";
import { FaDrumstickBite } from "react-icons/fa";
import { Link } from "react-router-dom";

const IngredientsCard = (props) => {
  const { strIngredient, strDescription } = props;
  return (
    <div className=" col-lg-4 col-md-6 text-center">
      <Link className=" text-white" to={strIngredient}>
        <FaDrumstickBite size="3.5rem" />
        <h2 className=" mt-2">{strIngredient}</h2>
        <p>{strDescription.split(" ").slice(0, 25).join(" ")}</p>
      </Link>
    </div>
  );
};

export default IngredientsCard;
