function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      <button className="active">🏠<span>Home</span></button>
      <button>❤️<span>Wishlist</span></button>
      <button>🛒<span>Cart</span></button>
      <button>👤<span>Account</span></button>
    </nav>
  );
}

export default BottomNavigation;
