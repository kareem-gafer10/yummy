import Loader from "../components/Loader";
import IngredientsCard from "../components/ingredientsCard";
import useFetch from "../hooks/useFetch";

const Ingredients = () => {
  let { dataList, loading } = useFetch("list.php?i=list","meals");

  return (
    <div className="row g-5 my-5 pb-5 meal">
      {loading ? (
        <Loader />
      ) : (
        dataList
          .slice(0, 20)
          .map((ingredient) => (
            <IngredientsCard key={ingredient.idIngredient} {...ingredient} />
          ))
      )}
    </div>
  );
};

export default Ingredients;
