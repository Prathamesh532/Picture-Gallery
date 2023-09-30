import React, { useState, useEffect } from "react";
import axios from "axios";
import FormComponent from "./FormComponent";
import ImageGrid from "./ImageGrid";
import REACT_APP_ACCESS_KEY from "../utils/contanst";


const ImageGallery = () => {
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    try {
      setError("");
      if (!category) {
        setError("Please enter a category.");  // Set an error message for empty category
        return;
      }

      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${category}&client_id=${REACT_APP_ACCESS_KEY}`
      );
      setImages(response.data.results);
    } catch (err) {
      setError("Error fetching images. Please try again.");
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = () => {
    fetchImages();
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Picture Gallery</h1>
      <FormComponent category={category} handleChange={handleChange} handleClick={handleClick} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {!error && images.length === 0 && (
        <p className="text-center">No images found for the specified category.</p>
      )}
      <ImageGrid images={images} />
    </div>
  );
}

export default ImageGallery;
