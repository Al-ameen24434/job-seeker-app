// src/pages/Home.tsx
import Hero from '../components/hero';
import ProjectCard from '../components/projectCard';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Admin panel with analytics, orders, and product management.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather App",
    description: "Real-time weather with 5-day forecast and search.",
    tech: ["TypeScript", "React", "OpenWeather API"],
  },
  {
    title: "Task Manager",
    description: "Kanban-style task tracker with drag & drop.",
    tech: ["React", "Redux", "Local Storage"],
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="bg-gradient">
          <h2>Let's Work Together</h2>
          <p>I'm open to freelance projects and full-time frontend roles.</p>
          <button className="btn btn-outline">Contact Me</button>
        </div>
      </div>
    </div>
  );
}