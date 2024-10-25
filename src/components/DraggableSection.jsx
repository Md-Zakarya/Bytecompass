import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DraggableSection({ section, onMouseDown, onContentChange }) {
  const [value, setValue] = useState(section.content);

  const handleDoubleClick = () => {
    onContentChange(section.id, { ...section, isEditing: true });
  };

  const handleBlur = () => {
    onContentChange(section.id, { ...section, isEditing: false, content: value });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onContentChange(section.id, { ...section, content: value, isEditing: false });
    }
  };

  return (
    <div
      className="p-4 mb-2 bg-white rounded-lg shadow-lg absolute cursor-move transition-transform duration-300 ease-in-out hover:scale-105 border-2 border-blue-500"
      style={{ top: section.top, left: section.left }}
      onMouseDown={(e) => onMouseDown(e, section)}
      onDoubleClick={handleDoubleClick}
    >
      {section.isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="border p-2 rounded w-full font-sans text-lg"
        />
      ) : (
        <>
          {section.type === 'header' && (
            <h1 className="text-3xl font-extrabold text-gray-800 font-serif">{section.content}</h1>
          )}
          {section.type === 'text' && (
            <p className="text-lg text-gray-600 font-sans">{section.content}</p>
          )}
          {section.type === 'image' && (
            <img src={section.content} alt="Draggable" className="w-full h-auto rounded" />
          )}
          {section.type === 'button' && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              {section.content}
            </button>
          )}
        </>
      )}
    </div>
  );
}

DraggableSection.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    top: PropTypes.number,
    left: PropTypes.number,
    isEditing: PropTypes.bool,
  }).isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
};

export default DraggableSection;