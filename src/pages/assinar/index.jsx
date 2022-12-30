import React,{ useState} from "react";
import Input from "../../components/input"
import Button from "../../components/button"

function Assinar() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    tel: ""
  })

  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen text-typography-primary gap-5 px-4">
      <h1 className="text-[20px] font-bold ">Estamos quase lá, preencha os campos, e efetue o pagamento para concluir sua adesão ao grupo</h1>
      <div className="bg-background-secondary flex flex-col rounded-lg p-4 max-w-lg gap-4">
        <h2 className="text-[14px]">preencha os campos abaixo para que possamos lhe enviar o link do grupo</h2>
        <form className="gap-4 flex flex-col">
          <Input value={formData.first_name} setValue={(value) => setFormData({...formData, first_name: value})} label="Primeiro Nome" placeholder="John" />
          <Input value={formData.last_name} setValue={(value) => setFormData({...formData, last_name: value})} label="Último Nome" placeholder="Doe" />
          <Input value={formData.email} setValue={(value) => setFormData({...formData, email: value})} label="Email" placeholder="JohnDoe@jhon.com" />
          <Input value={formData.tel} setValue={(value) => setFormData({...formData, tel: value})} label="Número" type="number"  placeholder="xxxxxxxxxxx" />
          <Button type="primary" label="Enviar" className="bg-white text-typography-secondary h-[60px] text-xl" />
        </form>
      </div>
    </div>
  )
}

export default Assinar;
