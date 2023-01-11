import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Image from "../Image";
import logo from "../../assets/logo.png"
import Button from "../Button";

interface IObjectKeys {
  [key: string]: string | number | undefined;
  //TODO https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b#:~:text=interface%20IObjectKeys%20%7B%0A%20%20%5Bkey%3A%20string%5D%3A%20string%20%7C%20number%20%7C%20undefined%3B%0A%7D
}

interface FormData extends IObjectKeys {
  username: string,
  password: string,

  //TODO buscar que carajo es esto


}


const Form = () => {

  const [formData, setFormData] = useState<FormData>({ username: "", password: "" })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newFormData: FormData = { ...formData }; // si le pasaba formData sin copiarlo, pasaba la referencia y no andaba xq los estados de react son inmutables 
    newFormData[event.target.name] = event.target.value
    setFormData(newFormData)
  }

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    setFormData({ username: "", password: "" })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-80 bg-orange-400 rounded-sm shadow-lg shadow-zinc-500/50 flex justify-around items-center flex-col">
        <div className="w-2/3 pt-2">
          <Image
            image={logo}
            alt="logo" />
        </div>
        <form className="gap-5 flex flex-col" onSubmit={handleLogin}>
          <div className="">
            <div><label htmlFor="username">Usuario</label></div>
            <input value={formData.username} onChange={handleInput} id="username" className="hover:bg-orange-100 placeholder:text-xs" type="text" name="username"
              placeholder="Esme23" required></input>
          </div>
          <div className="">
            <div><label htmlFor="password">Password</label></div>
            <input value={formData.password} onInput={handleInput} id="password" className="hover:bg-orange-100" type="password" name="password"
              placeholder="******" required></input>
          </div>
          <div className="flex justify-evenly">
            <Button
              title="Enviar"
            />
            <Button
              title="Registrarse" />
          </div>
        </form>
      </div>
    </div>

  );
};

export default Form;
