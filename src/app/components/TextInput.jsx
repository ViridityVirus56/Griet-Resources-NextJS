export default function TextInput({ type = "text", placeholder = "", className = "", ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`bg-black py-1.5 px-3 text-white border-solid rounded-[11px] ${className}`}
            {...props}
        />
    );
}