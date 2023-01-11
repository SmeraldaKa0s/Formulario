import Button from "../Button"
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="w-80 h-96 bg-orange-400 rounded-sm shadow-lg shadow-zinc-500/50 flex justify-around items-center flex-col">
                <form className="gap-3 flex flex-col text-sm">
                    <div>
                        <div><label htmlFor="username">Usuario</label></div>
                        <input id="username" className="hover:bg-orange-100 placeholder:text-xs" type="text" name="username"
                            placeholder="Esme23" required></input>
                    </div>
                    <div>
                        <div><label htmlFor="full-name">Nombre y apellido</label></div>
                        <input id="full-name" className="hover:bg-orange-100 placeholder:text-xs" type="text" name="full-name"
                            placeholder="Lesli Capo" required></input>
                    </div>
                    <div>
                        <div><label htmlFor="date">Fecha</label></div>
                        <input id="date" className="hover:bg-orange-100 placeholder:text-xs" type="date" name="date"
                             required></input>
                    </div>

                    <div>
                        <div><label htmlFor="password">Password</label></div>
                        <input id="password" className="hover:bg-orange-100" type="password" name="password"
                            placeholder="******" required></input>
                    </div>
                    <div>
                        <div><label htmlFor="confirm_password">Repetir Password</label></div>
                        <input id="confirm_password" className="hover:bg-orange-100 mb-4" type="password" name="confirm_password"
                            placeholder="******" required></input>
                    </div>
                    <div className="flex justify-evenly gap-4">
                        <Link to="/"
                            className="bg-violet-400/75 border-2 border-violet-400/50 hover:bg-violet-200/50 shadow-lg shadow-orange-600/50 rounded-lg p-1 text-sm text-zinc-800">
                            Volver</Link>
                        <Button
                            title="Registrarse" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp
