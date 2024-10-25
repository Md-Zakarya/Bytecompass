import React from 'react';
import SidePanel from './components/SidePanel.jsx';
import Canvas from './components/Canvas.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Drag and Drop Editor</h1>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <SidePanel />
        <Canvas />
      </div>
      <footer className="bg-blue-600 text-white p-4 shadow-md text-center">
        <p>© 2023 Drag and Drop Editor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;