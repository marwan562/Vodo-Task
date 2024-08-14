import Loading from "../components/feedback/Loading";
import MoviesList from "../components/MoviesList";
import HeadLine from "../components/ui/HeadLine";
import { useGetMoviesQuery } from "../store/apis/MoviesApi";

const MoviesPage = () => {
  const { isLoading, data, error } = useGetMoviesQuery();
  return (
    <Loading isLoading={isLoading} error={error}>
      <div className="flex flex-col m-5 gap-5">
        <HeadLine title="Movies" description="Show Details Any Movie." />
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  ">
          {data?.map((el) => (
            <MoviesList key={el.id} {...el} />
          ))}
        </div>
      </div>
    </Loading>
  );
};

export default MoviesPage;
