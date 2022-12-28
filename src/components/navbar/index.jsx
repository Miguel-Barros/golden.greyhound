import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      {show ? (
        <AiOutlineClose
          className="z-[1000] md:hidden cursor-pointer right-8 top-10 absolute text-3xl text-typography-primary"
          onClick={() => setShow(!show)}
        />
      ) : (
        <AiOutlineMenu
          className="z-[1000] md:hidden cursor-pointer right-8 top-10 absolute text-3xl text-typography-primary"
          onClick={() => setShow(!show)}
        />
      )}
      <div
        className={`ease-linear duration-300 sm:w-2/3 md:w-screen sm:flex-col md:flex-row sm:h-screen md:h-fit sm:justify-center md:justify-between sm:bg-background-primary md:bg-transparent md:left-0 ${
          show ? "sm:left-0" : "sm:-left-[100%]"
        } min-w-[300px] flex px-[40px] py-4 sm:items-start md:items-center z-[1000] absolute top-0`}
      >
        <img
          className="md:static sm:absolute w-[64px] h-[64px] top-10"
          src={logo}
          alt="GoldenGreyHound"
        />
        <div className="sm:flex-col md:flex-row flex w-fit gap-12 text-typography-primary font-bold text-lg md:items-center sm:items-start">
          <Link
            className={`cursor-pointer ${
              pathname === "/inicio" &&
              "text-typography-danger border-b-2 border-typography-danger"
            }`}
            to="/inicio"
          >
            Início
          </Link>
          <Link
            className={`cursor-pointer ${
              pathname === "/como_funciona" &&
              "text-typography-danger border-b-2 border-typography-danger"
            }`}
            to="/como_funciona"
          >
            Como Funciona
          </Link>
          <Link
            className={`cursor-pointer ${
              pathname === "/planos" &&
              "text-typography-danger border-b-2 border-typography-danger"
            }`}
            to="/planos"
          >
            Planos
          </Link>
          <Link
            className="bg-background-danger cursor-pointer p-2 rounded-lg"
            to="/assinar"
          >
            Assinar
          </Link>
        </div>
      </div>
      {show && (
        <div
          className="md:hidden w-screen h-screen bg-background-primary opacity-50 blur-xl absolute top-0 left-0 z-[999]"
          onClick={() => setShow(!show)}
        />
      )}
    </>
  );
}
