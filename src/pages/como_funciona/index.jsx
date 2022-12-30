import React from "react";

function ComoFunciona() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-typography-primary p-4">
      <h1 className="text-xl font-semibold">Video demonstração de como funciona a consultoria </h1>
      <div className="sm:w-full md:w-[700px] md:h-[400px] sm:h-fit bg-background-secondary rounded-xl mt-5 flex justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/2Zs4m4lnjxkY"
          title="YouTube video player"
          className="w-[98%] h-[96%] rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}

export default ComoFunciona;
