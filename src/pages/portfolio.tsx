
import ProjectCard from "../components/projectCard";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Full-stack admin panel with real-time analytics and order tracking.",
    tech: ["React", "Express", "MongoDB", "Tailwind"],
    image: "https://via.placeholder.com/400x250?text=E-Commerce+App",
  },
  {
    title: "Weather App",
    description: "Search any city and get real-time weather with alerts.",
    tech: ["TypeScript", "React", "OpenWeather API"],
    image: "https://via.placeholder.com/400x250?text=Weather+App",
  },
  {
    title: "Task Manager",
    description: "Drag-and-drop Kanban board with local persistence.",
    tech: ["React", "Redux", "Framer Motion"],
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
  },
];

export default function Portfolio() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="text-center mb-8 opacity-80">
          Here are some of the apps I've built using modern web technologies.
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}