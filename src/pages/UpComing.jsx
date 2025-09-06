import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import GradientText from "../components/GradientText";

const UpComing = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("upcoming", page).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div>
      <GradientText
        colors={["#ff6b6b", "#ff8e8e", "#ffa8a8", "#ffc2c2", "#ffd6d6"]}
        animationSpeed={2}
        showBorder={false}
        className="text-4xl font-bold mb-6"
      >
        Upcoming Movies
      </GradientText>
      <MovieList movies={movies} isLoading={isLoading} />
      {!isLoading && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
};

export default UpComing;
