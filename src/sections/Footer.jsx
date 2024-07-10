import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-6 font-montserrat px-5 font-medium">
      <div className="container mx-auto text-center">
        <p className="mb-4 flex gap-3 mini:flex-row flex-col  w-[80%] mx-auto">
          <strong><img src="/logo.jpeg" alt="" /></strong> - Your go-to platform for seamless online music. Experience the best quality sound and an extensive library of songs tailored to your unique taste.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Music Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
