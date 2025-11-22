import React from "react";
import Header from "../../common/Header";
import Footer from "../../Footer";
import CTABanner from "../Homepage/CTABanner";
import BlogCard from "../../common/BlogCard";
import { Link } from "react-router-dom";




const BlogDetail = () => {

  const blogPosts = [
  {
    id: 1,
    imageUrl: "/Assets/Bpost1.png",
    category: "Architecture",
    title: "Home Staging Tips to Attract Buyers Quickly",
    date: "July 9, 2024",
    author: "Brooklyn Simmons",
  },
  {
    id: 2,
    imageUrl: "/Assets/Bpost2.png",
    category: "Building",
    title: "Navigating the Mortgage Approval Process",
    date: "July 9, 2024",
    author: "Brooklyn Simmons",
  },
  {
    id: 3,
    imageUrl: "/Assets/Bpost3.png",
    category: "Checklist",
    title: "The Ultimate Checklist for First-Time Home Buyers",
    date: "July 9, 2024",
    author: "Brooklyn Simmons",
  },
]
  return (
    <>
          <Header bgColor="white" text="" border="" />
    
<div className="bg-white py-16 lg:py-24">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Article Header */}
        <div className="text-center mb-10">
          <h1
            className="font-times font-bold text-gray-900 mb-4 tracking-tight"
            style={{ fontSize: "60px", lineHeight: "1.1" }}
          >
            Insights, Tips & Property Advice <br />
            From GFS Realtors
          </h1>
          <div
            className="flex justify-center items-center text-gray-500"
            style={{ fontSize: "1.125rem" }} // Equivalent to text-lg or text-xl
          >
            <span>July 9, 2024</span>
            <span className="mx-2">&bull;</span>
            <span>Brooklyn Simmons</span>
          </div>
        </div>

        {/* Hero Image */}
        <img
          className="w-full object-cover rounded-xl shadow-2xl mb-12"
          style={{
            maxHeight: "500px",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          src="/Assets/bldetail1.png" // Replace with your image
          alt="Modern villa with a pool"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/1200x500/eeeeee/999999?text=Hero+Image+Placeholder";
          }}
        />

        {/* --- Main Content Body --- */}
        {/* Using max-w-4xl and mx-auto to create the focused column of text.
          Setting default text style for the entire block. 
        */}
        <div 
          className="max-w-4xl mx-auto text-[#0A0A0ACC] font-montserrat leading-relaxed"
          style={{ fontSize: "1.20rem" }}
        >
          {/* Paragraph 1 */}
          <p className="mb-6">
            A grid system is a design tool used to arrange content on a webpage. 
            It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, 
            and can help to make the layout more visually appealing and easier to navigate.
          </p>
          
          {/* Paragraph 2 */}
          <p className="mt-4 mb-10">
            If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from 
            one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids 
            improve page readability and scannability and allow people to quickly get where they need to go.
          </p>
          
          {/* Definition Header (Centered) */}
          {/* This requires custom margin to match the image's structure */}
          <h2 className="text-center font-semibold text-[#0A0A0A] font-montserrat text-2xl px-10 sm:px-20 lg:px-32 leading-normal mb-8">
            Definition: A grid is made up of columns, gutters, and margins
            that provide a structure for the layout of elements on a page.
          </h2>
          
          {/* Interior Office Image */}
          <img
            className="rounded-xl shadow-lg my-10 mx-auto w-full"
            style={{
              maxHeight: "350px",
              maxWidth: "900px",
              display: "block",
            }}
            src="/Assets/bldetail2.png" // Replace with your image
            alt="Interior of a modern office"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/900x350/eeeeee/999999?text=Image+Placeholder";
            }}
          />
          
          {/* Paragraph 3 */}
          <p className="font-montserrat font-normal max-w-6xl mt-6 mb-4">
            There are three common grid types used in websites and interfaces:
            column grid, modular grid, and hierarchical grid.
          </p>
          
          {/* Paragraph 4 */}
          <p className="text-[#0A0A0A] font-montserrat mb-4">
            Column grid involves dividing a page into vertical columns. UI
            elements and content are then aligned to these columns.
          </p>
          
          {/* Paragraph 5 */}
          <p className="my-4">
            Modular grid extends the column grid further by adding rows to it.
            This intersection of columns and rows make up modules to which
            elements and content are aligned. Modular grids are great for
            ecommerce and listing pages, as rows are repeatable to accommodate
            browsing.
          </p>
          
          {/* Paragraph 6 */}
          <p className="mb-10">
            Hierarchical grid: Content is organized by importance using
            columns, rows, and modules. The most important elements and pieces
            of content take up the biggest pieces of the grid.
          </p>
          
          {/* Section Header: Breaking Down the Grid */}
          <h2
            className="font-semibold font-serif text-3xl text-gray-900 mt-12 mb-6"
            style={{ fontSize: "2rem" }}
          >
            Breaking Down the Grid
          </h2>
          
          {/* Paragraph 7 */}
          <p className="mb-4">
            Regardless of the type of grid you are using, the grid is made up
            of three elements: columns, gutters, and margins.
          </p>
          
          {/* Paragraph 8 */}
          <p className="py-2 mb-10">
            <span className="font-semibold">Columns:</span> Columns take up most of the real estate in a grid.
            Elements and content are placed in columns. To adapt to any screen
            size, column widths are generally defined with percentages rather
            than fixed values and the number of columns will vary. For
            example, a grid on a mobile device might have 4 columns and a grid
            on a desktop might have 12 columns.
          </p>
          
          {/* Exterior House Image */}
          <img
            className="rounded-xl shadow-md my-8 mx-auto w-full"
            style={{
              maxHeight: "350px",
              maxWidth: "900px",
              display: "block",
            }}
            src="/Assets/bldetail3.png" // Replace with your image
            alt="Exterior of a modern house"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/900x350/eeeeee/999999?text=Image+Placeholder";
            }}
          />
          
          {/* Paragraph 9 (Gutters) */}
          <p className="mt-6 mb-4">
            <span className="font-semibold">Gutters:</span> The gutter is the space between columns that separates
            elements and content from different columns. Gutter widths are
            fixed values but can change based on different breakpoints. For
            example, wider gutters are appropriate for larger screens, whereas
            smaller gutters are appropriate for smaller screens like mobile.
          </p>
          
          {/* Section Header: Examples of Grids in Use */}
          <h2 className="my-4 font-semibold text-[#0A0A0ACC]">
            Examples of Grids in Use
          </h2>
          
          {/* Paragraph 10 */}
          <p className="mb-10">
            Our first example is from <span className="font-semibold">The New York Times</span>. This screen utilizes
            a hierarchical grid to create a newspaper-like reading experience.
            At desktop screen size, two main columns make up the hierarchical
            grid. The most important news story takes up the most space in the
            grid, the left column, followed by secondary and tertiary stories,
            which take up the smaller column and modules on the right.
          </p>
        </div>
        {/* --- End Main Content Body --- */}
      </article>
    </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-8 lg:px-14">
            {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog-details`}>

              <BlogCard
                key={post.id}
                imageUrl={post.imageUrl}
                category={post.category}
                title={post.title}
                date={post.date}
                author={post.author}
              />
              </Link>
            ))}
          </div>
      
      <CTABanner/>
      <Footer/>
    </>
  );
};

export default BlogDetail;
