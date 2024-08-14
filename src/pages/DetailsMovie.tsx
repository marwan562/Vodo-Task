import { useParams } from "react-router-dom";
import Loading from "../components/feedback/Loading";
import PageNotFound from "./PageNotFound";
import { useGetMovieByIdQuery } from "../store/apis/MoviesApi";

const DetailsMovie = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading, error } = useGetMovieByIdQuery(id);

  if (!movie && !isLoading && !error) return <PageNotFound />;

  const MovieDetailsSections = [
    { label: "Genre", value: movie?.genre.join(", ") },
    { label: "Rating", value: movie?.rating },
    { label: "Director", value: movie?.director },
    { label: "Actors", value: movie?.actors.join(", ") },
    { label: "Plot", value: movie?.plot },
    { label: "Runtime", value: `${movie?.runtime} minutes` },
    { label: "Awards", value: movie?.awards },
    { label: "Box Office", value: movie?.boxOffice },
    { label: "Production", value: movie?.production },
    { label: "Website", value: movie?.website, isLink: true },
  ];
  return (
    <Loading isLoading={isLoading} error={error}>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        {movie?.poster && (
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              className="w-full"
              alt={`Poster of ${movie.title}`}
              src={movie.poster}
            />
          </div>
        )}
        <div className="md:ml-6 mt-6 md:mt-0 md:w-1/2 lg:w-2/3">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="lg:text-2xl text-xl font-semibold text-black underline mb-2">
              {movie?.title}
            </h1>
            <p className="text-sm text-black">Year: {movie?.year}</p>
          </div>
          {MovieDetailsSections.map(({ label, value, isLink }, index) => (
            <div key={index} className="py-4 border-b border-gray-200">
              <p className="text-lg font-semibold text-black mb-1">{label}</p>
              {isLink ? (
                <a
                  href={value}
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-black">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Loading>
  );
};

export default DetailsMovie;
