import Button from '@/components/Button'
import planIcon from '@/assets/images/ServicePlans/plan-icon.png'

import './ServicePlans.scss'

const plans = [
  {
    title: 'Эконом',
    items: [
      'Цельноламельный щит 18 мм',
      'Сорт А - с сучками',
      'От 750 ₽/пог',
      'От 4 500 ₽ за окно',
    ],
  },
  {
    title: 'Стандарт',
    items: [
      'Мебельный щит из сосны 18 мм',
      'Сорт экстра - без сучков и дефектов',
      'От 950 ₽/пог',
      'От 5 800 ₽ за окно',
    ],
  },
  {
    title: 'Премиум',
    items: [
      'Дуб, бук, ясень, сосна, лиственница, орех',
      'Сорт экстра - без сучков и дефектов',
      'От 1 750 ₽/пог',
      'От 10 500 ₽ за окно',
    ],
  },
  {
    title: 'Эксклюзив',
    items: [
      'Фигурные, резные, рельефные наличники по желанию клиента',
      'Дуб, бук, ясень, сосна, лиственница, орех',
      'Сорт А - с сучками',
      'От 2 500 ₽/пог',
      'От 15 000 ₽ за окно',
    ],
  },
]

export default () => {
  return (
    <section className="service-plans" aria-labelledby="service-plans-title">
      <div className="service-plans__inner container">
        <h2 className="service-plans__title h2" id="service-plans-title">
          Варианты сотрудничества
        </h2>

        <ul className="service-plans__list">
          {plans.map(({ title, items }) => (
            <li className="service-plans-card" key={title}>
              <div className="service-plans-card__body">
                <div className="service-plans-card__content">
                  <img
                    className="service-plans-card__icon"
                    src={planIcon}
                    alt=""
                    width="100"
                    height="100"
                    loading="lazy"
                  />

                  <h3 className="service-plans-card__title h3">{title}</h3>

                  <ul className="service-plans-card__items">
                    {items.map((item) => (
                      <li className="service-plans-card__item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="service-plans-card__button" href="/">
                  Оставить заявку
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
