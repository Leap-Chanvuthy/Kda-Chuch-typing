const Card = ({ children, className }) => {
    return (
        <div className={`bg-gray-700 p-4 text-xl flex gap-10 rounded-xl justify-center items-center ${className}`}>
            {children}
        </div>
    )
}

export default Card