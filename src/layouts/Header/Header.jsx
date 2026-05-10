import './Header.scss'
import clsx from 'clsx'
import BurgerButton from '@/components/BurgerButton'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Logo from '@/components/Logo'

const navigationItems = [
  {
    label: 'Продукция',
    href: '/services/',
    hasDropdown: true,
  },
  {
    label: 'О компании',
    href: '/about/',
  },
  {
    label: 'Отзывы',
    href: '/reviews/',
  },
  {
    label: 'Контакты',
    href: '/contacts/',
  },
]

const productItems = [
  {
    label: 'Наличники',
    href: '#',
  },
  {
    label: 'Лестницы',
    href: '#',
  },
  {
    label: 'Порталы и арки',
    href: '#',
  },
  {
    label: 'Обсады и подоконники',
    href: '#',
  },
  {
    label: 'Декор',
    href: '#',
  },
  {
    label: 'Малые архитектурные формы',
    href: '#',
  },
]

const serviceItems = [
  {
    label: 'Замер',
    href: '#',
  },
]

export default (props) => {
  const { className } = props

  return (
    <header className={clsx('header', className)} data-js-overlay-menu="">
      <div className="header__inner ">
        <Logo className="header__logo" loading="eager" />

        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__nav-list">
            {navigationItems.map(({ label, href, hasDropdown }) => (
              <li className="header__nav-item" key={label}>
                <a className="header__nav-link" href={href}>
                  <span>{label}</span>
                  {hasDropdown && (
                    <svg
                      className="header__nav-arrow"
                      width="8"
                      height="6"
                      viewBox="0 0 8 6"
                      aria-hidden="true"
                    >
                      <path d="M4 6L0.535898 0H7.4641L4 6Z" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <address className="header__contacts">
            <a className="header__contact-link" href="tel:+79818872804">
              <Icon className="header__contact-icon" name="phone" hasFill />
              <span>+7-981-887-28-04</span>
            </a>
            <a
              className="header__contact-link"
              href="mailto:kubera.wood@yandex.ru"
            >
              <Icon className="header__contact-icon" name="mail" hasFill />
              <span>kuberaspb@mail.ru</span>
            </a>
          </address>

          <Button
            className="header__callback"
            extraAttrs={{ 'data-js-callback-popup-open': '' }}
          >
            Заказать звонок
          </Button>

          <BurgerButton
            className="header__burger visible-tablet"
            extraAttrs={{ 'data-js-overlay-menu-burger-button': '' }}
          />
        </div>
      </div>

      <dialog className="header__overlay-menu" data-js-overlay-menu-dialog="">
        <div className="header__overlay-menu-inner">
          <nav className="header__overlay-nav" aria-label="Мобильная навигация">
            <div className="header__overlay-nav-group">
              <p className="header__overlay-nav-title">Продукция</p>
              <ul className="header__overlay-nav-list">
                {productItems.map(({ label, href }) => (
                  <li className="header__overlay-nav-item" key={label}>
                    <a className="header__overlay-nav-link" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header__overlay-nav-group">
              <p className="header__overlay-nav-title">Услуги</p>
              <ul className="header__overlay-nav-list">
                {serviceItems.map(({ label, href }) => (
                  <li className="header__overlay-nav-item" key={label}>
                    <a className="header__overlay-nav-link" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="header__overlay-nav-list header__overlay-nav-list--main">
              {navigationItems.slice(1).map(({ label, href }) => (
                <li className="header__overlay-nav-item" key={label}>
                  <a className="header__overlay-nav-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__overlay-footer">
            <address className="header__overlay-contacts">
              <a
                className="header__overlay-contact-link"
                href="tel:+79818872804"
              >
                <Icon
                  className="header__overlay-contact-icon"
                  name="phone"
                  hasFill
                />
                <span>+7-981-887-28-04</span>
              </a>
              <a
                className="header__overlay-contact-link"
                href="mailto:kubera.wood@yandex.ru"
              >
                <Icon
                  className="header__overlay-contact-icon"
                  name="mail"
                  hasFill
                />
                <span>kuberaspb@mail.ru</span>
              </a>
            </address>

            <Button
              className="header__overlay-callback"
              extraAttrs={{ 'data-js-callback-popup-open': '' }}
            >
              Заказать звонок
            </Button>
          </div>
        </div>
      </dialog>
    </header>
  )
}
