import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DraggableSection from './DraggableSection.jsx';

const generateId = () => `section-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

function Canvas() {
  const [sections, setSections] = useState([]);
  const [draggingSection, setDraggingSection] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    handleLoad();
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const sectionData = JSON.parse(e.dataTransfer.getData('section'));
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSection = { ...sectionData, top: y, left: x, id: generateId(), isEditing: false };

    setSections((prevSections) => [...prevSections, newSection]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleMouseDown = (e, section) => {
    setDraggingSection(section);
    setOffset({ x: e.clientX - section.left, y: e.clientY - section.top });
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (draggingSection) {
      const newSections = sections.map((section) => {
        if (section.id === draggingSection.id) {
          return {
            ...section,
            left: e.clientX - offset.x,
            top: e.clientY - offset.y,
          };
        }
        return section;
      });
      setSections(newSections);
    }
  };

  const handleMouseUp = () => {
    setDraggingSection(null);
    document.body.style.cursor = 'default';
  };

  const handleClear = () => {
    setSections([]);
  };

  const handleSave = () => {
    localStorage.setItem('sections', JSON.stringify(sections));
  };

  const handleLoad = () => {
    try {
      const savedSections = JSON.parse(localStorage.getItem('sections'));
      if (savedSections) {
        setSections(savedSections);
      }
    } catch (error) {
      console.error('Failed to load sections:', error);
    }
  };

  const handleContentChange = (id, updatedSection) => {
    setSections((prevSections) =>
      prevSections.map((section) => (section.id === id ? updatedSection : section))
    );
  };

  return (
    <div
      className="w-full md:w-3/4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ position: 'relative' }}
    >
      <div className="min-h-screen p-6 bg-white rounded-lg shadow-2xl relative">
        <div className="flex justify-between mb-6">
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Save
          </button>
          <button
            onClick={handleLoad}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Load
          </button>
        </div>
        {sections.length === 0 ? (
          <p className="text-center text-gray-500">Drag components here</p>
        ) : (
          sections.map((section) => (
            <DraggableSection
              key={section.id}
              section={section}
              onMouseDown={handleMouseDown}
              onContentChange={handleContentChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

Canvas.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      top: PropTypes.number,
      left: PropTypes.number,
      isEditing: PropTypes.bool,
    })
  ),
  setSections: PropTypes.func,
  draggingSection: PropTypes.object,
  setDraggingSection: PropTypes.func,
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  setOffset: PropTypes.func,
};

export default Canvas;