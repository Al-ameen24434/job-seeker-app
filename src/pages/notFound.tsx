import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section section-dark text-center">
      <div className="container">
        <h1 className="error-code">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-3 mb-6 opacity-80">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
}