import CardMeal from "../components/cardMeal";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

const Home = () => {
  let { dataList, loading } = useFetch("search.php?s","meals");

  return (
    <>
      <div className="row g-4 my-5 pb-5 meal ">
        {loading ? (
          <Loader />
        ) : (
          dataList.map((meal) => <CardMeal key={meal.idMeal} {...meal} />)
        )}
      </div>
    </>
  );
};

export default Home;
