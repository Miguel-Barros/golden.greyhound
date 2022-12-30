import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Modal_free from "./modal_free";
import { useState } from "react";

function Inicio({currentPath}) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className="flex justify-center items-center text-center flex-col h-screen w-screen text-typography-primary gap-5 ">
      <Modal_free modal={modal} setModal={setModal} closeModal={() => setModal(false)}/>
      <h1 className="text-typography-primary font-bold text-4xl ">Bem vindo</h1>
      <h2 className="text-typography-primary font-bold text-2xl ">
        Somos a
        <span className="text-typography-secondary"> Golden Greyhound </span>
      </h2>
      <h3>A sua Consultora em corrida de galgos americanos</h3>
      <span>
        <h3>+ 4 anos no mercado de galgos</h3>
        <h3>+ 35k de seguidores</h3>
      </span>
      <span className={`flex justify-between gap-5 ${modal && "opacity-0"}`}>
        <Button
          type="secondary"
          danger
          label="Grupo Free"
          action={() => setModal(true)}
        />
        <Button
          type="primary"
          label="Grupo VIP"
          action={() => navigate("/assinar")}
        />
      </span>
      <Link to="/planos" className="text-typography-danger cursor-pointer">
        Ver diferença dos grupos
      </Link>
    </div>
  );
}

export default Inicio;
