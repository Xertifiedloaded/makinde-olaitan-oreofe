

import React, { useState, useEffect } from "react";
import axios from "axios"; 

const CLOUDINARY_UPLOAD_PRESET = "iboyi7t9";  
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/dpn9svwqm/image/upload`;  


const BlogForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    tags: "",
    img: "",
  });

  const [error, setError] = useState(""); 

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await axios.post(CLOUDINARY_UPLOAD_URL, data);
        setFormData((prev) => ({ ...prev, img: response.data.secure_url }));
      } catch (error) {
        console.error("Image upload failed:", error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        content: initialData.content || "",
        author: initialData.author || "",
        tags: initialData.tags?.join(", ") || "",
        img: initialData.img || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.title || !formData.content) {
      setError("Title and content are required.");
      return;
    }

    try {

      await onSubmit({
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      });
      setError(""); 
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("400 Bad Request: Invalid blog post data.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 text-red-500">
          {error}
        </div>
      )}
      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium capitalize">{key}</label>
          {key === "img" ? (
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          ) : (
            <input
              type={key === "content" || key === "description" ? "textarea" : "text"}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required={key !== "img"}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

const ProjectForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    category: "",
    url: "",
    sourceUrl: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await axios.post(CLOUDINARY_UPLOAD_URL, data);
        setFormData((prev) => ({ ...prev, img: response.data.secure_url }));
      } catch (error) {
        console.error("Image upload failed:", error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        img: initialData.img || "",
        category: initialData.category || "",
        url: initialData.url || "",
        sourceUrl: initialData.sourceUrl || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium capitalize">{key}</label>
          {key === "img" ? (
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          ) : key === "category" ? (
            <select
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          ) : (
            <input
              type={key === "description" ? "textarea" : "text"}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required={key !== "sourceUrl"}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};






const ServiceForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    img: "",
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await axios.post(CLOUDINARY_UPLOAD_URL, data);
        setFormData((prev) => ({ ...prev, img: response.data.secure_url }));
      } catch (error) {
        console.error("Image upload failed:", error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        title: initialData.title || "",
        description: initialData.description || "",
        img: initialData.img || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium capitalize">{key}</label>
          {key === "img" ? (
            <input
              type="file"
              onChange={handleImageUpload}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          ) : (
            <input
              type={key === "description" ? "textarea" : "text"}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export { BlogForm, ProjectForm, ServiceForm };
