import Link from "next/link";

export default function Card({ children, href, link, className }) {
    const baseClass = "flex items-center justify-center bg-[#95cd9d] text-white py-20 px-10 rounded-lg shadow-md text-center";
    const combinedClass = className ? `${baseClass} ${className}` : baseClass;
    if (link) {
        return (
            <Link href={href} className="block">
                <div className={combinedClass + " hover:scale-105 transition-transform duration-500 ease-out cursor-pointer"}>
                    {children}
                </div>
            </Link>
        );
    }
    return (
        <div className={combinedClass}>
            {children}
        </div>
    );
}