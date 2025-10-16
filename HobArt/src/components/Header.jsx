export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="logo" href="/" aria-label="HobArt მთავარი">
          <img src="/logo.jpg" alt="HobArt ლოგო" />
        </a>

        <button
          id="navToggle"
          aria-expanded="false"
          aria-controls="primaryNav"
          className="nav-toggle"
        >
          ☰ მენიუ
        </button>

        <nav
          id="primaryNav"
          className="primary-nav"
          role="navigation"
          aria-label="მთავარი ნავიგაცია"
          aria-hidden="true"
        >
          <ul className="nav-list" role="menubar">
            <li role="none">
              <a role="menuitem" href="/">HOME</a>
            </li>
            <li role="none" className="has-submenu">
              <button
                className="submenu-toggle"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="shopSubmenu"
              >
                SHOP ALL ▾
              </button>
              <ul
                id="shopSubmenu"
                className="submenu"
                role="menu"
                aria-label="Shop categories"
                hidden
              >
                <li><a href="New Products">New Products</a></li>
                <li><a href="Accessories">Accessories</a></li>
                <li><a href="Felt toys">Felt toys</a></li>
                <li><a href="Epoxy accessories">Epoxy accessories</a></li>
              </ul>
            </li>
            <li><a href="About us">About us</a></li>
            <li><a href="Blog">Blog</a></li>
            <li><a href="Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
