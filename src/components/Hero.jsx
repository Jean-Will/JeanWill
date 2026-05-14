import React from 'react'
import header from '../imgs/header1.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center text-white"
      style={{
        backgroundImage: `url(${header})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-4"></h1>

        <a
          href="https://wa.me/+351912295799?text=Olá,%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-60 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full text-sm md:text-base hover:bg-gray-50"
        >
          Conversar
        </a>
      </div>
    </section>
  );
}
