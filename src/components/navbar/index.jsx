import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      {show ? (
          <div className="flex w-full justify-between items-center">
          <img
          className="md:hidden sm:absolute right-2 w-[46px] h-[46px] top-8 left-3 z-[10000]"
          src={logo}
          alt="GoldenGreyHound"
        />
        <AiOutlineClose
          className="z-[1000] md:hidden cursor-pointer right-8 top-10 absolute text-3xl text-typography-primary"
          onClick={() => setShow(!show)}
        />
        </div>
      ) : (
        <div className="flex w-full justify-between items-center">
          <img
          className="md:hidden sm:absolute right-2 w-[46px] h-[46px] top-8 left-3 z-[10000]"
          src={logo}
          alt="GoldenGreyHound"
          onClick={() => navigate('/inicio')}
        />
        <AiOutlineMenu
          className="z-[1000] md:hidden cursor-pointer right-8 top-10 absolute text-3xl text-typography-primary"
          onClick={() => setShow(!show)}
        />
        </div>
      )}
      <div
        className={`ease-linear duration-300 sm:w-2/3 md:w-screen sm:flex-col md:flex-row sm:h-screen md:h-fit sm:justify-center md:justify-between sm:bg-background-primary md:bg-transparent md:left-0 ${
          show ? "sm:left-0" : "sm:-left-[100%]"
        } min-w-[300px] flex px-[40px] py-4 sm:items-start md:items-center z-[1000] absolute top-0`}
      >
        <img
          className="md:block md:static sm:none sm:hidden w-[64px] h-[64px] top-10"
          src={logo}
          alt="GoldenGreyHound"
        />
        <div className="sm:flex-col md:flex-row flex w-fit gap-12 text-typography-primary font-bold text-lg md:items-center sm:items-start">
          <Link
            className={`cursor-pointer ${
              (pathname === "/inicio" || pathname === "/") &&
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
            className={`cursor-pointer ${
              (pathname === "/suporte" || pathname === "/") &&
              "text-typography-danger border-b-2 border-typography-danger"
            }`}
            to="/suporte"
          >
            Suporte
          </Link>
          <Link
            className={`${pathname === "/assinar" ? "bg-background-danger" :"bg-background-secondary"} cursor-pointer p-2 rounded-lg`}
            to="/assinar"
          >
            Assinar
          </Link>
        </div>
          <p className="md:hidden sm:absolute md:none sm:block w-2/3 bottom-5 text-left left-10 absolute text-typography-primary opacity-30">
            Golden GreyHound © 2022  <span> Termos  Privacidade</span>
          </p>
      </div>
      {show && (
        <div
          className="md:hidden md:none sm:block w-screen h-screen bg-background-primary opacity-50 blur-xl absolute top-0 left-0 z-[999]"
          onClick={() => setShow(!show)}
        />
      )}
    </>
  );
}
