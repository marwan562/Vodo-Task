import { useEffect } from "react";
import Loading from "../components/feedback/Loading";
import MoviesList from "../components/MoviesList";
import HeadLine from "../components/ui/HeadLine";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetMovies } from "../store/movies/moviesSlice";

const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const { records, error, status } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(actGetMovies());

    
  }, [dispatch, status]);

  return (
    <Loading isLoading={status === "pending"} error={error}>
      <div className="flex flex-col m-5 gap-5">
        <HeadLine title="Movies" description="Show Details Any Movie." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {records?.map((el) => (
            <MoviesList key={el.id} {...el} />
          ))}
        </div>
      </div>
    </Loading>
  );
};

export default MoviesPage;
