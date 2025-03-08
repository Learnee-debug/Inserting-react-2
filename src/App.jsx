import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import movies from "./moviesData";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Movie Collection</h1>
      <button className="add-movie-button" onClick={() => navigate("/add-movie")}>
        Add Movie
      </button>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
