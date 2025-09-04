import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovies } from "../api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    searchMovies(query, page).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
    });
  }, [query, page]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <MovieList movies={movies} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default SearchResults;
