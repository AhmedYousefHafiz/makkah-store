type HeaderProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
};

function Header({ searchText, onSearchChange }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-top">
        <div>
          <p className="welcome-text">Welcome</p>
          <h1>Product Catalog</h1>
        </div>
        <div className="profile-button" aria-label="User profile">A</div>
      </div>

      <label className="search-box">
        <span>🔎</span>
        <input
          value={searchText}
          placeholder="Search products or categories"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
    </header>
  );
}

export default Header;
