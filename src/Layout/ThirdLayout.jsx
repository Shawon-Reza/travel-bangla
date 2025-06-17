import React from 'react';
import Footer from '../Components/Footer';

const ThirdLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full"> {/* full viewport height */}
      <div className="flex-grow">
        <p>ThirdLayout</p>
        {/* Other content can go here */}
      </div>
      <Footer />
    </div>
  );
};

export default ThirdLayout;
