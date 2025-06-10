"use client";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Card from "../components/Card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function test() {
    const [user, setUser] = useState("");
    const [password, setPw] = useState("");
    const [error, setError] = useState("");
    const backendurl = process.env.BACKEND_URL || "http://localhost:3000/api";
    const router = useRouter();

    const handleTypeUser = (e) => {
        setUser(e?.currentTarget?.value);
    };
    const handleTypepw = (e) => {
        setPw(e?.currentTarget?.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`${backendurl}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user, password }),
            });
            if (!res.ok) throw new Error("Login failed");
            const msg = await res.json();
            localStorage.setItem("token", msg.token);
            router.push("/home");
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };
    return (
        <Card link={false} className={"w-90 h-100"}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
                <TextInput id="username" onChange={handleTypeUser} type="text" placeholder="Username" />
                <TextInput id="password" onChange={handleTypepw} type="password" placeholder="Password" />
                <p className="text-red-800">{error}</p>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
}

