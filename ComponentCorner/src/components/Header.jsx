import './Header.css';

export default function Header({ storeName }) {
  return (
    <header className="header">
      <h1 className="store-name">{storeName}</h1>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
