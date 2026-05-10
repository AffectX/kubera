import Icon from '@/components/Icon'

import './ServiceBenefits.scss'

const benefits = [
  {
    title: 'Эстетика',
    items: ['Уют и натуральность', 'Презентабельный вид', 'Гармония с интерьером'],
  },
  {
    title: 'Функциональность',
    items: ['Герметизация', 'Теплоизоляция', 'Защита стен'],
  },
  {
    title: 'Долговечность',
    items: ['Ремонтопригодность', 'Прочность', 'Экологичность'],
  },
  {
    title: 'Уникальность',
    items: ['Разнообразие форм'],
  },
]

export default () => {
  return (
    <section className="service-benefits" aria-labelledby="service-benefits-title">
      <div className="service-benefits__inner container">
        <header className="service-benefits__header">
          <h2 className="service-benefits__title h2" id="service-benefits-title">
            Преимущества наличников
          </h2>
          <p className="service-benefits__description">
            Наличники из дерева - это не просто декоративный элемент, а важная
            функциональная и эстетическая часть оконного или дверного проема
          </p>
        </header>

        <ul className="service-benefits__list">
          {benefits.map(({ title, items }) => (
            <li className="service-benefits-card" key={title}>
              <div className="service-benefits-card__content">
                <h3 className="service-benefits-card__title h3">{title}</h3>
                <ul className="service-benefits-card__items">
                  {items.map((item) => (
                    <li className="service-benefits-card__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className="service-benefits-card__link"
                href="/"
                aria-label={`${title}: подробнее`}
              >
                <span>Подробнее</span>
                <Icon className="service-benefits-card__icon" name="arrow-top-right" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
