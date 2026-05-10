import './Advantages.scss'
import decorImage from '@/assets/images/Advantages/advantage-decor.png'
import fullImage from '@/assets/images/Advantages/advantage-full.png'

const advantages = [
  {
    title: 'Срок реализации от 3 дней',
    description: 'Запускаем работу сразу после согласования деталей и замера.',
  },
  {
    title: 'Отборные материалы',
    description: 'Используем сухую древесину без видимых дефектов и трещин.',
  },
  {
    title: 'Гарантия 10 лет',
    description: 'Отвечаем за качество конструкции, монтажа и финишной отделки.',
  },
  {
    title: 'Консультация',
    description: 'Подскажем решение под стиль, размеры и особенности помещения.',
  },
  {
    title: 'Оперативный замер',
    description: 'Приезжаем на объект, фиксируем размеры и уточняем нюансы.',
  },
  {
    title: 'Помогаем с дизайном',
    description: 'Подбираем форму, оттенок и детали, чтобы изделие смотрелось цельно.',
  },
]

export default () => {
  return (
    <section className="advantages container" aria-labelledby="advantages-title">
      <h2 className="advantages__title h2" id="advantages-title">
        Залог качества нашей работы
      </h2>

      <div className="advantages__grid">
        {advantages.map(({ title, description }) => (
          <article className="advantages-card" key={title}>
            <div className="advantages-card__content">
              <h3 className="advantages-card__title h3">{title}</h3>
              <p className="advantages-card__description">{description}</p>
            </div>

            <picture className="advantages-card__picture">
              <source media="(max-width: 767px)" srcSet={fullImage} />
              <img
                className="advantages-card__image"
                src={decorImage}
                alt=""
                width="454"
                height="454"
                loading="lazy"
              />
            </picture>
          </article>
        ))}
      </div>
    </section>
  )
}
