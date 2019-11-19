import React from "react";
import PropTypes from "prop-types";

const Note = ({ note, handleDelete }) => {
  return (
    <div className="four wide column">
      <div className="ui card">
        <div className="content">
          <div className="description">{note.content}</div>
        </div>
        <button
          className="ui bottom attached button"
          onClick={() => handleDelete(note.id)}
        >
          <i className="trash alternate icon"></i>
          Delete
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    handleDelete: PropTypes.func
  })
};

export default Note;
