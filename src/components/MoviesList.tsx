import { Link } from "react-router-dom";
import { TMovie } from "../types";

const MoviesList = ({ id, title, poster }: TMovie) => {
  return (
    <Link
      to={`/details-movie/${id}`}
      className=" hover:drop-shadow-lg text-center  group"
    >
      <img src={poster} alt={title} className="w-full rounded-lg " />
      <h2 className=" font-semibold group-hover:underline">{title}</h2>
    </Link>
  );
};

export default MoviesList;
