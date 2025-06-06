import Link from "next/link";

export default function Card({ children, href }) {
    return (
        <Link href={href} className="block">
            <div className="flex items-center justify-center bg-[#95cd9d] text-white py-2 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-500 ease-out cursor-pointer">
                {children}
            </div>
        </Link>
    );
}