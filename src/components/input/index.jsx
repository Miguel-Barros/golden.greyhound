import React from 'react'

export default function Input({label, placeholder, type, value, setValue, className}) {
  return (
    <div className={`border-2 w-full border-white h-[60px] relative rounded-lg ${className}`}>
        <div className="absolute text-[14px] bg-background-secondary font-semibold h-[20px] -top-[15px] px-2 py-1 left-4">{label}</div>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="outline-none w-full h-full bg-transparent font-bold p-2 placeholder:text-[#ffffff80]" type={type || "text"} placeholder={placeholder} />
    </div>
  )
}

export function TextArea({label, placeholder, type, value, setValue, className}) {
  return (
    <div className={`border-2 w-full border-white h-full relative rounded-lg ${className}`}>
        <div className="absolute text-[14px] bg-background-secondary font-semibold h-[20px] -top-[15px] px-2 py-1 left-4">{label}</div>
        <textarea style={{resize: "none"}} value={value} onChange={(e) => setValue(e.target.value)} className="outline-none w-full h-full bg-transparent font-bold p-2 placeholder:text-[#ffffff80]" type={type || "text"} placeholder={placeholder} />
    </div>
  )
}