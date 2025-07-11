import React from 'react';

const CustomHeading = ({ text }) => {
  return (
    <div
      className="rounded-md md:px-2 px-2 lg:py-[10px] md:py-3 py-5 text-[#171717] font-semibold text-xs uppercase "
      style={{
        background: 'linear-gradient(to right, #CB9F3C, #E9DC8A, #CBB260)',
      }}
    >
      {text}
    </div>
  );
};

export default CustomHeading;
