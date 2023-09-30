import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image) => (
        <div className="image bg-gray-100 rounded-lg overflow-hidden" key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
          <div className="info p-4">
            <p className="text-sm font-semibold">Author: {image.user.name}</p>
            <p className="text-sm">Description: {image.description || "N/A"}</p>
            <a
              href={image.links.html}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              View on Unsplash
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
