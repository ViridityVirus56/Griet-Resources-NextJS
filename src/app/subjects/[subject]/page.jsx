export default function SubjectPage({ params }) {
    const { subject } = params;
    const sublist = ["Math", "Science", "History", "English", "Art"];
    if (!sublist.includes(subject)) {
        return <div className="text-center text-red-500 mt-8">Subject not found.</div>;
    }
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">{subject}</h1>
            <p className="text-lg">Welcome to the {subject} page!</p>
        </div>
    );
}
