import './ServiceColors.scss'

const colors = Array.from({ length: 7 }, (_, index) => ({
  name: 'Цвет',
  value: '#d9d9d9',
  id: index,
}))

const colorGroups = [
  {
    title: 'Тип окрашивания',
    description: 'Описание',
  },
  {
    title: 'Тип окрашивания',
    description: 'Описание',
  },
]

export default () => {
  return (
    <section className="service-colors container" aria-labelledby="service-colors-title">
      <div className="service-colors__header">
        <h2 className="service-colors__title h2" id="service-colors-title">
          Цветовые решения
        </h2>
        <p className="service-colors__description">
          Окрашиваем изделия в любой цвет по вашему желанию
        </p>
      </div>

      <div className="service-colors__grid">
        {colorGroups.map(({ title, description }, groupIndex) => (
          <article className="service-colors-card" key={groupIndex}>
            <div className="service-colors-card__header">
              <h3 className="service-colors-card__title h3">{title}</h3>
              <p className="service-colors-card__description">{description}</p>
            </div>

            <ul className="service-colors-card__list">
              {colors.map(({ name, value, id }) => (
                <li className="service-colors-card__item" key={id}>
                  <span
                    className="service-colors-card__swatch"
                    style={{ '--swatch-color': value }}
                    aria-hidden="true"
                  />
                  <span className="service-colors-card__name">{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
