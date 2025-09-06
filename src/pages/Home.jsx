import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import HeroSection from "../components/HeroSection";
import GradientText from "../components/GradientText";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies("popular", page).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div>
      <HeroSection />
      <div className="container">
        <GradientText
          colors={["#3ca2fa", "#80eeb4", "#3ca2fa", "#80eeb4", "#3ca2fa"]}
          animationSpeed={2}
          showBorder={false}
          className="gradient-heading"
        >
          Popular Movies
        </GradientText>
        <MovieList movies={movies} isLoading={isLoading} />
        {!isLoading && (
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        )}
      </div>
    </div>
  );
};

export default Home;
