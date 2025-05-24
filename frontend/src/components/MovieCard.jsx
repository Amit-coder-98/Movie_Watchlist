// frontend/src/components/MovieCard.jsx
import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ movie, onDelete, onToggle, onEdit }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
      <Card className="w-100 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center">{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {movie.genre} • {movie.year}
          </Card.Subtitle>
          <Card.Text className="text-center">
            Status:{" "}
            <span className={movie.watched ? "text-success" : "text-warning"}>
              {movie.watched ? "Watched" : "To Watch"}
            </span>
          </Card.Text>
          <div className="d-flex justify-content-center gap-2">
            <Button
              variant={movie.watched ? "warning" : "success"}
              size="sm"
              onClick={() => onToggle(movie._id)}
            >
              {movie.watched ? "Mark as To Watch" : "Mark as Watched"}
            </Button>
            <Button variant="primary" size="sm" onClick={() => onEdit(movie)}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(movie._id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
