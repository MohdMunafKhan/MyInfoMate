import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [suggestedMovies, setSuggestedMovies] = useState([]);

    const API_KEY = '7774bb9bc47f51706f79740af7391620';

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
                );
                setSuggestedMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        api_key: API_KEY,
                        query: query
                    }
                }
            );
            setMovies(response.data.results);

        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    };

    const movieList = query ? movies : suggestedMovies;
    return (
        <>
            <section className="movies py-4">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-4">
                            <Link to="/" className='btn btn-outline-danger'>Back to Home</Link>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row mx-auto mb-4">
                        <div className="col-12">
                            <h2 className="text-center fw-bold">🎬 Search Your Favorite Movies</h2>
                        </div>
                    </div>

                    <div className="row mx-auto mb-3">
                        <div className="col-12">
                            <div className="input-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter movie name"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>

                    <h4 className="mb-3">
                        {query ? "Search Results" : "🔥 Trending Movies Today"}
                    </h4>

                    <div className="row mx-auto">
                        {movieList.map((movie) => (
                            <div key={movie.id} className="col-md-4 mb-4">
                                <div className="movie-card p-3 rounded-4">
                                    {movie.poster_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            className="card-img-top img-fluid"
                                            alt={movie.title}
                                        />
                                    ) : (
                                        <div className="bg-secondary text-danger text-center py-5">No Image</div>
                                    )}
                                    <div className="movie-card-body mt-3">
                                        <h5 className="movie-card-title">{movie.title}</h5>
                                        <p className="movie-card-text">
                                            {movie.overview ? movie.overview.slice(0, 100) + '...' : 'No description available.'}
                                        </p>
                                        <small className="text-danger">📅 Release: {movie.release_date || 'N/A'}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies
