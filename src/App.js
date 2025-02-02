import React from "react";

const DnDOverlay = () => {
  return (
    <div className="relative w-full h-full bg-black text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/path-to-dnd-bg.jpg')" }}></div>

      <div className="relative flex flex-col items-center w-full h-full p-4">
        <div className="w-3/4 h-1/2 bg-gray-900 border-4 border-yellow-500 rounded-lg shadow-lg flex justify-center items-center">
          <span className="text-xl">Mapa de Owlbear</span>
        </div>

        <div className="w-full flex justify-between mt-4">
          <div className="w-1/4 h-40 bg-gray-900 border-4 border-red-500 rounded-lg shadow-lg flex justify-center items-center">
            <span className="text-lg">DM</span>
          </div>

          <div className="w-1/2 h-40 bg-gray-900 border-4 border-blue-500 rounded-lg shadow-lg flex justify-center items-center">
            <span className="text-lg">Jugadores</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return <DnDOverlay />;
}

export default App;
