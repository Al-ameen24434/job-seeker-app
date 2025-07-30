import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero fade-in">
      <h1 className="stagger-1">Hi, I'm Al-ameen</h1>
      <p className="stagger-2">A passionate frontend developer building clean, responsive, and user-friendly web apps.</p>
      <div className="hero-buttons stagger-3">
        <Link to="/portfolio" className="btn btn-primary pulse">View Projects</Link>
        <Link to="/jobs" className="btn btn-outline pulse">Track Jobs</Link>
      </div>
    </section>
  );
}