export default function Button({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`bg-black text-white px-4 py-1.5 rounded-lg ${className}`}
        >
            {children}
        </button>
    );
}
