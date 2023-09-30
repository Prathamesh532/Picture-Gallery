import React from "react";

const FormComponent = ({ category, handleChange, handleClick }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <input
        type="text"
        value={category}
        onChange={handleChange}
        placeholder="Enter a category name"
        className="border border-gray-300 rounded-lg px-4 py-2 mr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default FormComponent;
