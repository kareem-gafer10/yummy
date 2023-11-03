import Loader from "../components/Loader";
import CardMeal from "../components/cardMeal";
import useFetchSingle from "../hooks/useFetchSingle";

const AreaDetails = () => {
  let { details, loading } = useFetchSingle("filter.php?a=");

  return (
    <>
      <div className="row g-5 my-5 pb-5 meal">
        {loading ? (
          <Loader />
        ) : (
          details.map((meal) => <CardMeal key={meal.idMeal} {...meal} />)
        )}
      </div>
    </>
  );
};

export default AreaDetails;
