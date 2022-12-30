import React from 'react'
import Input,{ TextArea} from '../../components/input';
import Button from '../../components/button';

function Suporte() {
  return (
    <div className='flex justify-center items-center w-screen h-screen flex-col text-typography-primary p-4'>
      <p className='sm:text-sm md:text-xl sm:w-full md:w-1/2 text-center font-bold'>Por gentileza preencha o formulario de forma clara e objetiva para que os <span className='text-typography-secondary'>Golden Helpers</span> possam te ajudar</p>
      <div>
        <form className='sm:w-full md:w-[700px] mt-[20px] h-fit min-h-[400px] sm:flex-col-reverse md:flex-row  sm:items-center md:items-start flex  justify-center gap-5 md:p-5 sm:p-4 bg-background-secondary rounded-xl'>
          <span className='sm:w-full md:w-1/2 flex flex-col gap-5'>
            <Input label='Nome e Sobrenome' placeholder='John Doe' />
            <Input label='Email' placeholder='johndoe@email.com' />
            <Input label='Telefone' placeholder='(DD) XXXXX-XXXX' />
            <Button label='Cancelar' type='secondary' className='pt-3 pb-3' />
            <Button label='Enviar' type='secondary' className='bg-white text-typography-secondary border-0 pt-3 pb-3' />
          </span>
          <span className='sm:w-full md:w-1/2 flex flex-col gap-4'>
            <Input label='Assunto' placeholder='Assunto' />
            <TextArea label='Mensagem' placeholder='Mensagem' className='h-[76%] pt-1' /> 
          </span>
        </form>
      </div>
    </div>
  )
}

export default Suporte;