import React from 'react'

const BlogCard = ({ imageUrl, category, title, date, author }) => {
  return (
    <div className="blog-card group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
      {/* Image Wrapper with Overflow Hidden for Zoom Effect */}
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400/eeeeee/999999?text=Image+Not+Found";
          }}
        />

        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#B58718] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#B58718]">
          {title}
        </h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">&bull;</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard