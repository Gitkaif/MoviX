import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import SearchResults from "./pages/SearchResults";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/upcoming" element={<UpComing />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
