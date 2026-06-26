import { SHOP } from '../data.js'

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo" aria-hidden="true">
          ✂
        </span>
        <div>
          <h1 className="header__title">{SHOP.name}</h1>
          <p className="header__tagline">{SHOP.tagline}</p>
        </div>
      </div>
      <p className="header__meta">
        {SHOP.address} · {SHOP.phone}
      </p>
    </header>
  )
}
