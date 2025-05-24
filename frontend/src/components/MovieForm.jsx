import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

const MovieForm = ({ onAdd, onUpdate, editingMovie }) => {
  const [form, setForm] = useState({ title: "", genre: "", year: "" });

  useEffect(() => {
    if (editingMovie) {
      setForm({
        title: editingMovie.title,
        genre: editingMovie.genre,
        year: editingMovie.year,
      });
    } else {
      setForm({ title: "", genre: "", year: "" });
    }
  }, [editingMovie]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMovie) {
      onUpdate(editingMovie._id, form);
    } else {
      onAdd(form);
    }
    setForm({ title: "", genre: "", year: "" });
  };

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <h5 className="text-center mb-3">
          {editingMovie ? "✏️ Edit Movie" : "🎥 Add a Movie"}
        </h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="e.g. Interstellar"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              name="genre"
              value={form.genre}
              onChange={handleChange}
              required
              placeholder="e.g. Sci-Fi"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              placeholder="e.g. 2014"
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant={editingMovie ? "warning" : "primary"} type="submit">
              {editingMovie ? "Update Movie" : "Add Movie"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MovieForm;
