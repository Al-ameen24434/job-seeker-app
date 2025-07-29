interface Props {
  title: string;
  tech: string[];
}

export default function ProjectCard({ title, tech }: Props) {
  return (
    <div className="card pulse">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>A modern web application built with cutting-edge tools.</p>
        <div className="tech-badges">
          {tech.map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
        <div className="card-actions">
          <button className="btn btn-outline btn-sm">Code</button>
          <button className="btn btn-primary btn-sm">Live</button>
        </div>
      </div>
    </div>
  );
}