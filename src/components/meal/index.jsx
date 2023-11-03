import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loaing from "../Loader"
import "./meal.css"

const Meal = () => {
  const [mealDetail, setMealDetail] = useState({});
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const getMealDetails = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    
    // setMealDetail(data.meals[0])
    return data.meals[0];
  };

  const getRecipe = async () => {
    setLoader(true)
    let detailsObject = await getMealDetails();
    detailsObject.ingredients = [];
    const detailsMap = new Map(Object.entries(detailsObject));
    for (let i = 0; i < detailsMap.size; i++) {
      if (detailsMap.get(`strIngredient${i}`)) {
        detailsObject.ingredients.push(
          `${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(
            `strIngredient${i}`
          )}`
        );
      }
      setMealDetail(detailsObject);
    }
    setLoader(false)
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <>
    {!loader ? 
    <>
      <div className="col-md-5">
        <img
          className=" w-100 rounded-3"
          src={mealDetail.strMealThumb}
          alt={mealDetail.strMeal}
        />
        <h3 className=" text-center my-3">{mealDetail.strMeal}</h3>
        <Link className="btn btn-warning w-100 fs-5" to="/">
          Back To Home
        </Link>
      </div>

      <div className="col-md-7">
      
        <div className="">
          <h2>Instructions</h2>
          <p>{mealDetail?.strInstructions?.slice(0,500)}</p>
        </div>

        <h2>Area: {mealDetail.strArea}</h2>
        <h2 className=" py-3">Category : {mealDetail.strCategory}</h2>

        <div>
          <h2>Recipes :</h2>
          {mealDetail.ingredients?.map((item, i) => (
            <span className=" btn btn-lg btn-warning me-2 my-2" key={i}>
              {item}
            </span>
          ))}
        </div>

        <div className=" pt-3">
          {mealDetail.strTags && (
            <>
              <h2>Tags :</h2>
              {mealDetail.strTags.split(",").map((tag, i) => (
                <span className=" btn btn-lg btn-primary me-2 mt-2" key={i}>{tag}</span>
              ))}
            </>
          )}
        </div>

        <div  className=" py-4">
        <Link to={mealDetail.strSource} className="btn btn-lg btn-success me-3 mb-2" target="blank">Source</Link>
        <Link to={mealDetail.strYoutube} className="btn btn-lg btn-danger me-3 " target="blank">Youtube</Link>
        </div>


      </div>
      </>
      : <Loaing/>
     }
      
    </>
  );
};

export default Meal;
