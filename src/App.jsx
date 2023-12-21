import { useEffect, useState } from "react";
import ResultBox from "./Components/ResultBox";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.dec&api_key=be7bcc5cb49419b7221cb74ba34581f2&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=be7bcc5cb49419b7221cb74ba34581f2&query=";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  function getPopularMovies() {
    fetch(APIURL)
      .then((response) => response.json())
      .then((response) => setMovies(response.results));
  }

  function getSearchedMovies(search) {
    fetch(SEARCHAPI + search)
      .then((response) => response.json())
      .then((response) => setMovies(response.results));
  }

  useEffect(() => {
    setMovies([]);
    if (search === "") {
      getPopularMovies();
    } else {
      getSearchedMovies(search);
    }
  }, [search]);

  return (
    <div className="max-w-[1200px] min-h-[400px] shadow-xl mx-auto mt-5 p-3 rounded-lg">
      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md p-3 text-slate-700 shadow-md"
        />
      </div>
      <div className="w-full flex flex-wrap gap-4">
        <ResultBox movies={movies} />
      </div>
    </div>
  );
}

export default App;
