import './Products.scss'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import primaryImage from '@/assets/images/Products/product-primary.png'
import secondaryImage from '@/assets/images/Products/product-secondary.png'

const products = [
  {
    title: 'Наличники',
    description: 'Изготовим комплект под размеры проема и стиль интерьера',
    image: primaryImage,
    imageClassName: 'products-card__image--primary',
  },
  {
    title: 'Лестницы',
    description: 'Продуманные маршевые и винтовые конструкции из массива',
    image: secondaryImage,
    imageClassName: 'products-card__image--secondary',
  },
  {
    title: 'Порталы и арки',
    description:
      'Акцентные деревянные обрамления для дверных и оконных проемов',
    image: primaryImage,
    imageClassName: 'products-card__image--primary',
  },
  {
    title: 'Обсады и подоконники',
    description: 'Надежные элементы для защиты проемов и аккуратной отделки',
    image: primaryImage,
    imageClassName: 'products-card__image--primary',
  },
  {
    title: 'Декор',
    description: 'Резные детали и декоративные элементы для завершенного образа',
    image: primaryImage,
    imageClassName: 'products-card__image--primary',
  },
]

export default () => {
  return (
    <section className="products container" aria-labelledby="products-title">
      <h2 className="visually-hidden" id="products-title">
        Продукция
      </h2>

      <div className="products__grid">
        {products.map(({ title, description, image, imageClassName }, index) => (
          <article className="products-card" key={title}>
            <div className="products-card__body">
              <div className="products-card__content">
                <h3 className="products-card__title h3">{title}</h3>
                <p className="products-card__description">{description}</p>
              </div>

              <a
                className="products-card__link"
                href="/"
                aria-label={`${title}: подробнее`}
              >
                <span>Подробнее</span>
                <Icon
                  className="products-card__link-icon"
                  name="arrow-top-right"
                />
              </a>
            </div>

            <div className="products-card__picture">
              <img
                className={`products-card__image ${imageClassName}`}
                src={image}
                alt=""
                width={index === 1 ? '553' : '450'}
                height={index === 1 ? '553' : '450'}
                loading="lazy"
              />
            </div>
          </article>
        ))}

        <article
          className="products-request"
          aria-labelledby="products-request-title"
        >
          <h3 className="products-request__title h3" id="products-request-title">
            Представляем вам по-настоящему надежные, долговечные и невероятно красивые изделия из натуральных пород дерева
          </h3>

          <form className="products-request__form" action="/" method="post">
            <div className="products-request__fields">
              <input
                className="products-request__control"
                name="name"
                placeholder="Григорий"
                aria-label="Ваше имя"
              />
              <input
                className="products-request__control"
                name="phone"
                placeholder="+7 (981) 887-28-04"
                aria-label="Телефон"
                inputMode="tel"
                data-js-input-mask="phone"
              />
              <Button className="products-request__button" type="submit">
                Записаться на замер
              </Button>
            </div>

            <p className="products-request__privacy">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </article>
      </div>
    </section>
  )
}
