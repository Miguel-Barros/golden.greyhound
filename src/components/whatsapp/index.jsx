import React from "react";
import { BsWhatsapp } from "react-icons/bs";

export default function Support() {
  return (
    <div className="absolute z-[999] hover:-translate-y-1 ease-linear duration-200 bottom-10 right-10 p-4 bg-background-danger rounded-2xl rounded-br-none cursor-pointer" onClick={() => window.open('https://wa.link/vsz0cs')}>
      <BsWhatsapp size={32} color="#fff" />
    </div>
  );
}
