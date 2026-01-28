import React from 'react';

const TestComponent = () => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Test</h1>
      <p className="mb-4">If you see this box with a blue-purple gradient background and rounded corners, Tailwind CSS is working!</p>
      <div className="flex space-x-4">
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Button 1</button>
        <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">Button 2</button>
      </div>
    </div>
  );
};

export default TestComponent;