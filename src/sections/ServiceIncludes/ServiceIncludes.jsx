import './ServiceIncludes.scss'
import fullImage from '@/assets/images/Advantages/advantage-full.png'
import cardImage from '@/assets/images/ServiceIncludes/card-image.png'

const items = [
  'Замер и согласование',
  'Производство',
  'Доставка',
  'Установка',
]

export default () => {
  return (
    <section className="service-includes container" aria-labelledby="service-includes-title">
      <h2 className="service-includes__title h2" id="service-includes-title">
        Что входит в услугу
      </h2>

      <ul className="service-includes__list">
        {items.map((title) => (
          <li className="service-includes__item" key={title}>
            <article className="service-includes-card">
              <div className="service-includes-card__content">
                <h3 className="service-includes-card__title h3">{title}</h3>
                <p className="service-includes-card__description">Описание</p>
              </div>
              <picture className="service-includes-card__picture">
                <source media="(max-width: 767px)" srcSet={fullImage} />
                <img
                  className="service-includes-card__image"
                  src={cardImage}
                  alt=""
                  width="454"
                  height="454"
                  loading="lazy"
                />
              </picture>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
