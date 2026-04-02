import React from "react";

const Header = () => {
  return (
    <div
      className="p-3 md:p-0 w-full h-screen bg-cover bg-center flex flex-col items-center justify-center gap-3"
      style={{ backgroundImage: "url('/images/header.jpg')" }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/60"></div>
      <div className="w-fit h-max px-4 py-2 flex justify-center items-center rounded-md bg-[#f4f7f6] text-mist-100">
        <h1 className=" font-bold text-6xl text-[#ff7b18]">Agri-Platform</h1>
      </div>
      <p className="text-xl text-white shadow-2xl">
        La plateforme qui met en relation tous les composant de l'agriculture.
      </p>
      <p className="text-md text-neutral-50 shadow-amber-300">
        Que vous soyez cultuvateurs, grossiste, détaillant ou agronome.
        Ouvrez-vous au monde de l'agriculteure !
      </p>
    </div>
  );
};

export default Header;
