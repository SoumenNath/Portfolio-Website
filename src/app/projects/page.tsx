export default function ProjectsPage() {
  const projects = [
    { name: "Inventory Management System", description: "ASP.NET C# backend and frontend app" },
    { name: "Road Hazard Detection", description: "CV project using OpenCV and YOLOv8" },
    { name: "Disaster Resource Finder", description: "ASP.NET app to locate disaster resources" },
  ];

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.name} className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{p.name}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
