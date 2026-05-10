import './ServiceRequest.scss'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const socialItems = [
  {
    name: 'vk',
    label: 'ВКонтакте',
    href: '/',
  },
  {
    name: 'telegram',
    label: 'Telegram',
    href: '/',
  },
  {
    name: 'mail',
    label: 'Email',
    href: 'mailto:kuberaspb@mail.ru',
  },
  {
    name: 'phone',
    label: 'Телефон',
    href: 'tel:+79818872804',
  },
]

export default () => {
  return (
    <section className="service-request container" aria-labelledby="service-request-title">
      <div className="service-request__inner">
        <div className="service-request__content">
          <div className="service-request__offer">
            <h2 className="service-request__title h2" id="service-request-title">
              Наличники на весь дом внутренние и наружные
            </h2>
            <ul className="service-request__benefits">
              <li>Оперативный выезд на замер</li>
              <li>Скидка 10%</li>
            </ul>
          </div>

          <div className="service-request__contacts">
            <p className="service-request__description">
              Оставьте заявку или свяжитесь с нами удобным способом
            </p>

            <ul className="service-request__socials" aria-label="Способы связи">
              {socialItems.map(({ name, label, href }) => (
                <li className="service-request__social-item" key={name}>
                  <a
                    className="service-request__social-link"
                    href={href}
                    aria-label={label}
                  >
                    <Icon className="service-request__social-icon" name={name} hasFill />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className="service-request__form" action="/" method="post">
          <input
            className="service-request__control"
            name="name"
            placeholder="Григорий"
            aria-label="Ваше имя"
          />
          <input
            className="service-request__control"
            name="phone"
            placeholder="+7 (981) 887-28-04"
            aria-label="Телефон"
            inputMode="tel"
            data-js-input-mask="+{7} (000) 000-00-00"
          />
          <textarea
            className="service-request__control service-request__control--textarea"
            name="comment"
            placeholder="Комметарий"
            aria-label="Комментарий"
          />
          <Button className="service-request__button" type="submit">
            Записаться на замер
          </Button>
          <p className="service-request__privacy">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </div>
    </section>
  )
}
