// components/TabContent.jsx
import React from "react";

const TabContent = ({ data, onAdd, onEdit, onDelete, itemLabel }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{itemLabel}</h2>
      <ul>
        {data.map((item) => (
          <li
            key={item._id}
            className="bg-white text-black p-4 mb-4 shadow-md rounded-lg flex flex-col space-y-4"
          >
            <h3 className="text-lg font-bold">{item.title || item.name}</h3>
            <p>{item.description}</p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition duration-150"
                onClick={() => onDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
        onClick={onAdd}
      >
        Add {itemLabel.slice(0, -1)}
      </button>
    </div>
  );
};

export default TabContent;
