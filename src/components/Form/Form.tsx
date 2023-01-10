import { useForm, SubmitHandler } from "react-hook-form";
import Image from "../Image";
import logo from "../../assets/logo.png"

const Form = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-80 bg-orange-400 flex justify-around items-center flex-col">
        <div className="w-1/2">
          <Image
            image={logo}
            alt="logo" />
        </div>
        <form className="gap-5 flex flex-col">
          <div className="">
            <div><label htmlFor="username">Usuario</label></div>
            <input id="username" className="hover:bg-orange-100 placeholder:text-xs" type="text" name="Usuario"
              placeholder="Esme23" required></input>
          </div>
          <div className="">
            <div><label htmlFor="password">Password</label></div>
            <input id="password" className="hover:bg-orange-100" type="password" name="password"
              placeholder="******" required></input>
          </div>
        </form>

      </div>
    </div>

  );
};

export default Form;