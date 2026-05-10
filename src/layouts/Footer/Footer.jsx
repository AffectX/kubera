import './Footer.scss'
import Icon from '@/components/Icon'

const productItems = [
  'Наличники',
  'Лестницы',
  'Малые архитектурные формы',
  'Порталы и арки',
  'Обсады и подоконники',
  'Декор',
]

const documentItems = [
  'Согласие на обработку персональных данных',
  'Согласие на использование Cookie',
  'Публичная оферта',
  'Пользовательское соглашение',
  'Политика конфиденциальности',
  'Согласия на использование материалов',
]

const socialItems = [
  {
    name: 'vk',
    label: 'ВКонтакте',
  },
  {
    name: 'telegram',
    label: 'Telegram',
  },
  {
    name: 'youtube',
    label: 'YouTube',
  },
  {
    name: 'max',
    label: 'Max',
  },
]

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <section className="footer__section">
            <h2 className="footer__title">Юридическая информация</h2>
            <p className="footer__text">
              Полное юридическое название,
              <br />
              ИНН,
              <br />
              ОГРН
            </p>
          </section>

          <section className="footer__section">
            <h2 className="footer__title">Телефон</h2>
            <a className="footer__link" href="tel:+79818872804">
              +7-981-887-28-04
            </a>

            <h2 className="footer__title footer__title--spaced">Почта</h2>
            <a className="footer__link" href="mailto:kuberaspb@mail.ru">
              kuberaspb@mail.ru
            </a>

            <h2 className="footer__title footer__title--spaced">Соц сети</h2>
            <ul className="footer__socials" aria-label="Социальные сети">
              {socialItems.map(({ name, label }) => (
                <li className="footer__social-item" key={name}>
                  <a className="footer__social-link" href="/" aria-label={label}>
                    <Icon className="footer__social-icon" name={name} hasFill />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav className="footer__section" aria-label="Продукция и услуги">
            <h2 className="footer__title">Продукция</h2>
            <ul className="footer__list">
              {productItems.map((label) => (
                <li className="footer__item" key={label}>
                  <a className="footer__link" href="/">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="footer__title footer__title--spaced">Услуги</h2>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/">
                  Замер
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/">
                  Установка
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer__section" aria-label="Документы">
            <h2 className="footer__title">Документы</h2>
            <ul className="footer__list">
              {documentItems.map((label) => (
                <li className="footer__item" key={label}>
                  <a className="footer__link" href="/">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">Все права зарегистрированы</p>
          <a className="footer__developer" href="/">
            Разработка сайта
          </a>
        </div>
      </div>
    </footer>
  )
}
