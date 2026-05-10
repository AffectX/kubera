import './ServiceHero.scss'
import Button from '@/components/Button'
import heroImage from '@/assets/images/ServiceHero/hero-image.png'

export default () => {
  return (
    <section className="service-hero" aria-labelledby="service-hero-title">
      <div className="service-hero__inner container">
        <div className="service-hero__content">
          <p className="service-hero__subtitle">Столярные изделия</p>
          <h1 className="service-hero__title h1" id="service-hero-title">
            Наличники внутренние и внешние
            <span> из дерева для вашего дома</span>
          </h1>

          <form className="service-hero__form" action="/" method="post">
            <div className="service-hero__fields">
              <input
                className="service-hero__control"
                name="name"
                placeholder="Григорий"
                aria-label="Ваше имя"
              />
              <input
                className="service-hero__control"
                name="phone"
                placeholder="+7 (981) 887-28-04"
                aria-label="Телефон"
                inputMode="tel"
                data-js-input-mask="+{7} (000) 000-00-00"
              />
              <textarea
                className="service-hero__control service-hero__control--textarea"
                name="comment"
                placeholder="Комметарий"
                aria-label="Комментарий"
              />
              <Button className="service-hero__button" type="submit">
                Записаться на замер
              </Button>
            </div>

            <p className="service-hero__privacy">
              Нажимая на кнопку, вы соглашаетесь с политикой
              конфиденциальности.
            </p>
          </form>
        </div>

        <img
          className="service-hero__image"
          src={heroImage}
          alt=""
          width="730"
          height="730"
          loading="eager"
        />
      </div>
    </section>
  )
}
