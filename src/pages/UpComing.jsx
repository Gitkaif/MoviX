import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const UpComing = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies("upcoming", page).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
    });
  }, [page]);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default UpComing;
