import Loader from "../components/Loader";
import CardMeal from "../components/cardMeal";
import useFetchSingle from "../hooks/useFetchSingle";

const CategoryDetails = () => {
  let { details, loading } = useFetchSingle("filter.php?c=");

  return (
    <div className="row g-5 my-5 pb-5 meal ">
      {loading ? (
        <Loader />
      ) : (
        details.map((meal) => <CardMeal key={meal.idMeal} {...meal} />)
      )}
    </div>
  );
};

export default CategoryDetails;
