import "../styles/Header.css";

function Header({ darkMode }) {
  return (
    <header className={darkMode ? "app dark" : "app-header"}>
      <div className="logo" aria-label="App logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 64 64"
          fill={darkMode ? "#eee" : "#007bff"}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
        >
          <circle cx="32" cy="32" r="30" stroke="none" />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="28"
            fontWeight="bold"
            fill={darkMode ? "#121212" : "#fff"}
            fontFamily="Arial, sans-serif"
          >
            P
          </text>
        </svg>
      </div>
      <h1 className="app-name">Product Comparison</h1>
    </header>
  );
}
export default Header;
