interface Props {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button = ({ children, onClick, className }: Props) => {
    return (
        <button onClick={onClick} className={`btn-primary ${className || ""}`}>
            {children}
        </button>
    );
};

export default Button;
