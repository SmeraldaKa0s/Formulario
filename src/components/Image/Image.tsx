interface ImageProps {
    image: string,
    alt: string,
}

const Image = ({ image, alt }: ImageProps) => {
    return (
        <img
            src={image}
            alt={alt}
        />
    )
}

export default Image; 
