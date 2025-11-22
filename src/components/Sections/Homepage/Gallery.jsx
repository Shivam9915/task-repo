import React from 'react'

const Gallery = () => {  
  const images = [
    {
      src: "/Assets/gallery1.png",
      alt: "Green architecture building with vertical forest",
      gridClass: "col-span-1 row-span-1 ",
    },
    {
      src: "/Assets/gallery2.png",
      alt: "Modern curved building with grass roof",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: "/Assets/gallery3.png",
      alt: "Apartment building with green balconies",
      gridClass: "col-span-2 row-span-1",
    },
    {
      src: "/Assets/galley4.png",
      alt: "Aerial view of green garden path on a building",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: "/Assets/gallery5.png",
      alt: "Apartment building covered in trees and plants",
      gridClass: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="bg-white pt-12 px-8 mt-18">
      {/* <div className="container mx-auto px-6 bg-red-600"> */}
        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:gap-6 h-[120vh]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`${img.gridClass} overflow-hidden rounded-lg shadow-lg w-full`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Gallery