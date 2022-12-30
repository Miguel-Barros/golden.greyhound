import React from 'react'
import QrCode from "../../assets/qrCode.png"

function Modal_free({ modal, setModal, closeModal }) {
    if (!modal) return null;

    return (
        <div onClick={() => setModal(false)} className='w-screen bg-[#00000030] h-screen flex justify-center items-center absolute backdrop-blur-sm'>
            <div className='w-1/2 flex items-center justify-center flex-col gap-10 animate-slide-up'>
                <img  src={QrCode} alt="QR Code" onClick={() => window.open('https://t.me/goldengreyhoundfreee')}/>
                <p className='text-typography-primary text-1xl sm:text-sm text-justify'>Para ter acesso ao Grupo Free, escaneie o QRCode acima ou clique para abrir no Telegram</p>
            </div>
        </div>
    )
}

export default Modal_free;