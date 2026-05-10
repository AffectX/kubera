import './ContactsHero.scss'
import Icon from '@/components/Icon'

const contactCards = [
  {
    icon: 'phone',
    title: 'Телефон отдела продаж',
    value: '+7-981-887-28-04',
    href: 'tel:+79818872804',
  },
  {
    icon: 'mail',
    title: 'E-mail',
    value: 'kuberaspb@mail.ru',
    href: 'mailto:kuberaspb@mail.ru',
  },
  {
    icon: 'telegram',
    title: 'Telegram для связи',
    value: 'Ссылка',
    href: '/',
  },
]

export default () => {
  return (
    <section className="contacts-hero" aria-labelledby="contacts-hero-title">
      <div className="contacts-hero__inner container">
        <div className="contacts-hero__content">
          <p className="contacts-hero__subtitle">Контакты</p>
          <h1 className="contacts-hero__title h1" id="contacts-hero-title">
            Всегда остаемся на связи
          </h1>
        </div>

        <ul className="contacts-hero__list">
          {contactCards.map(({ icon, title, value, href }) => (
            <li className="contacts-hero__item" key={title}>
              <a className="contacts-hero-card" href={href}>
                <span className="contacts-hero-card__icon" aria-hidden="true">
                  <Icon name={icon} hasFill />
                </span>
                <span className="contacts-hero-card__content">
                  <span className="contacts-hero-card__title">{title}</span>
                  <span className="contacts-hero-card__value">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
