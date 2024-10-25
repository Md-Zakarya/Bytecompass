import React from 'react';

function SidePanel() {
  const sections = [
    { id: 'header', type: 'header', content: 'Header Section' },
    { id: 'text', type: 'text', content: 'This is a text block.' },
    { id: 'image', type: 'image', content: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGltYWdlfGVufDB8fHx8MTYzMjQ1MjYyNQ&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 'button', type: 'button', content: 'Click Me' }
  ];

  const handleDragStart = (e, section) => {
    e.dataTransfer.setData('section', JSON.stringify(section));
  };

  return (
    <div className="w-full md:w-1/5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 shadow-2xl rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-white">Components</h2>
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            draggable
            onDragStart={(e) => handleDragStart(e, section)}
          >
            {section.type === 'image' ? (
              <img src={section.content} alt="Section image" className="w-full rounded-lg" />
            ) : (
              <p className="text-lg font-semibold text-gray-800">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidePanel;