import React from "react";

const IconBar = () => {
  return (
    <section className="bg-white overflow-hidden border-gray-200 py-4">
      <div className="scroll-container">
        <div className="scroll-content">
          <img src="/Assets/icons.png" alt="" className="h-35" />
          <img src="/Assets/icons.png" alt="" className="h-35" />
        </div>
      </div>
    </section>
  );
};

export default IconBar;
