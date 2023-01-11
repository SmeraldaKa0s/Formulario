interface ButtonProps {
    title: string,
    onClick?: any,

    // TODO: preguntar que type poner en onClick
}

const Button = ({ title, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}

export default Button 
