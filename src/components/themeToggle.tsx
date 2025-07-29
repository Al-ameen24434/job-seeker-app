export default function ThemeToggle() {
  const toggle = () => {
    document.body.classList.toggle('dark');
  };
  return (
    <button className="theme-toggle" onClick={toggle}>
      {document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}