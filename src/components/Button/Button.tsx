interface ButtonProps {
    title: string,
    onClick?: any,

    // TODO: preguntar que type poner en onClick
}

const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-violet-400/75 border-2 border-violet-400/50 hover:bg-violet-200/50 shadow-lg shadow-orange-600/50 rounded-lg p-1 text-sm text-zinc-800">
            {title}
        </button>
    )
}

export default Button 
