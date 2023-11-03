import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMeal from "../../components/cardMeal";

const SearchMeal = () => {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");
  const [searchLetter, setSearchLetter] = useState("");

  
  const searchByName = async (searchText) => {
    if (searchText.trim() === "") {
      setMeal([]); 
      return;
    }

    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      );
      setMeal(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchByName(search);
  }, [search]);

 

  const searchByFirstLetter= async(letter)=>{

      try {
        const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            setMeal(data.meals)
      }  catch (error) {
        console.log(error);
      }

  }


  useEffect(() => {
    searchByFirstLetter(searchLetter);
  }, [searchLetter]);





  return (
    <>
      <div className="col-md-6">
        <input
          type="text"
          className=" form-control mb-3"
          placeholder="Search with Meal Name"
          onChange={(e)=> setSearch(e.target.value)}
          value={search}
        />
      </div>

      <div className="col-md-6">
        <input
          type="text"
          className=" form-control"
          placeholder="Search with First Letter"
          onChange={(e)=> setSearchLetter(e.target.value)}
          maxLength="1"
          value={searchLetter}
        />
      </div>

      <div className="row gy-5">
        {meal?.length? meal.map((item) => (
          <CardMeal key={item.idMeal} {...item} />
        ))
        :
        <h1 className=" text-center my-5">No Meals Found</h1>
     
        
        }
      </div>
    </>
  );
};

export default SearchMeal;



