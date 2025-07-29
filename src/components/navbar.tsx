import { Link } from 'react-router-dom';
import ThemeToggle from './themeToggle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DevPortfolio Pro</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/jobs">Job Tracker</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}