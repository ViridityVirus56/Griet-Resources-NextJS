import Card from "../components/Card";

export default function Page() {
    const subjects = ["Math", "Science", "History", "English", "Art"];
    return (
        <div className="grid grid-cols-5 gap-4 my-2 mx-4">
            {subjects.map((item) => (
                <Card key={item} href={`/subjects/${item}`}>
                    <h2 className="text-2xl">{item}</h2>
                </Card>
            ))}
        </div>
    );
}