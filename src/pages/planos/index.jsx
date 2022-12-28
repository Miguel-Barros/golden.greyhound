import React from "react";
import Button from "../../components/button";

function Planos() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <span className="sm:flex-col md:flex-row flex w-[900px]  md:h-[350px] gap-10 p-10 text-typography-primary">
        <div className="flex flex-col gap-2  w-full border-2 rounded-lg justify-center items-center p-2">
          <span className="w-[60%] border-b-2 border-gray text-center">
            Grupo Free
          </span>
          <p>Entradas Limitadas Diariamente</p>
          <Button label="Entrar" className="w-1/2 mt-[25%] rounded-xl" />
        </div>
        <p className="self-center font-bold text-4xl">X</p>
        <div className="flex flex-col gap-2  w-full rounded-lg justify-center items-center bg-background-secondary p-2">
          <span className="w-[60%] border-b-2 border-gray text-center">
            Grupo VIP
          </span>
          <p>Videos Aulas</p>
          <p>Suporte 24h</p>
          <p>Entradas Ilimitadas</p>
          <p>Consultoria Especializada</p>
          <Button label="Entrar" className="w-1/2 rounded-xl" />
        </div>
      </span>
    </div>
  );
}

export default Planos;
