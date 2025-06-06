import TextInput from "../components/TextInput";
import Button from "../components/Button";
export default function test() {
    const backendurl = process.env.BACKEND_URL || "http://localhost:3000/api";
    return <div className = "bg-gray-900 text-white flex flex-col items-center justify-center h-screen">
        <form method = "POST" action={`${backendurl}/login`} className="h-screen flex flex-col gap-4 items-center justify-center">
            <TextInput type = "text" placeholder="Username" />
            <TextInput type="password" placeholder="Password" />
            <Button>Submit</Button>
        </form>
    </div>
}

