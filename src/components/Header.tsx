type HeaderProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
  showSearch?: boolean;
};

function Header({ searchText, onSearchChange, showSearch = false }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-grid">
        <div className="header-top">
          <div className="header-title-wrap">
            <p className="welcome-text">مرحبا" بك</p>
            <h1>مكة ماركت</h1>
          </div>
          {/* <div className="profile-button" aria-label="User profile">A</div> */}
        </div>

        {showSearch && (
          <label className="search-box header-search-box">
            <span>🔎</span>
            <input
              value={searchText}
              placeholder="البحث عن المنتجات"
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </label>
        )}
      </div>
    </header>
  );
}

export default Header;
