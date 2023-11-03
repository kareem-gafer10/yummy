/* eslint-disable react/prop-types */
import React from 'react'
import styles from "./categoryCard.module.css";
import { Link } from 'react-router-dom';

const CategoryCard = (props) => {

    const {strCategory,strCategoryThumb,strCategoryDescription}=props;

  return (
    <div className=' col-lg-3 col-md-6 col-sm-6'>
    <Link className=' text-dark' to={`${strCategory}`}>
      <div className={`${styles.inner} position-relative rounded-3 overflow-hidden`}>
        <img className='w-100' src={strCategoryThumb} alt={strCategory} />
        <div className=' position-absolute w-100 h-100  d-flex flex-column justify-content-center align-items-center p-3'>
        <h2>{strCategory}</h2>
        <p> {strCategoryDescription?.split(" ").slice(0, 20).join(" ")}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default CategoryCard;
