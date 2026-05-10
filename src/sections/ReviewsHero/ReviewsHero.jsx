import './ReviewsHero.scss'

const filters = [
  {
    label: 'Все',
    value: 'all',
  },
  {
    label: 'Наличники',
    value: 'trim',
  },
  {
    label: 'Обсады',
    value: 'frames',
  },
  {
    label: 'Подоконники',
    value: 'sills',
  },
  {
    label: 'Лестницы',
    value: 'stairs',
  },
  {
    label: 'Малые архитектурные формы',
    value: 'small-forms',
  },
]

const reviews = [
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'trim',
    order: 12,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'frames',
    order: 11,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'sills',
    order: 10,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'stairs',
    order: 9,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'small-forms',
    order: 8,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'trim',
    order: 7,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'frames',
    order: 6,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'sills',
    order: 5,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'stairs',
    order: 4,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'small-forms',
    order: 3,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'trim',
    order: 2,
  },
  {
    text: 'Текст отзыва',
    author: 'Имя',
    category: 'frames',
    order: 1,
  },
]

export default () => {
  return (
    <section
      className="reviews-hero"
      aria-labelledby="reviews-hero-title"
      data-js-reviews-page=""
    >
      <div className="reviews-hero__inner container">
        <div className="reviews-hero__content">
          <p className="reviews-hero__subtitle">Отзывы</p>
          <h1 className="reviews-hero__title h1" id="reviews-hero-title">
            Мнение наших клиентов
          </h1>
        </div>

        <div className="reviews-hero__toolbar">
          <label className="reviews-hero__type">
            <span>
              Тип: <span data-js-reviews-filter-current="">Все</span>
            </span>
            <select
              className="reviews-hero__type-select"
              name="reviews-type"
              aria-label="Тип отзыва"
              data-js-reviews-filter-select=""
            >
              {filters.map(({ label, value }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </select>
            <span className="reviews-hero__select-icon" aria-hidden="true" />
          </label>

          <div
            className="reviews-hero__filters"
            aria-label="Категории отзывов"
            role="tablist"
          >
            {filters.map(({ label, value }, index) => (
              <button
                className={`reviews-hero__filter${index === 0 ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={index === 0 ? 'true' : 'false'}
                data-js-reviews-filter={value}
                key={value}
              >
                {label}
              </button>
            ))}
          </div>

          <label className="reviews-hero__sort">
            <span>Порядок:</span>
            <select
              className="reviews-hero__sort-select"
              name="reviews-order"
              data-js-reviews-sort=""
            >
              <option value="default">По умолчанию</option>
              <option value="new">Сначала новые</option>
              <option value="old">Сначала старые</option>
            </select>
            <span className="reviews-hero__select-icon" aria-hidden="true" />
          </label>
        </div>
      </div>

      <div className="reviews-hero__grid container" data-js-reviews-grid="">
        {reviews.map(({ text, author, category, order }, index) => (
          <article
            className="reviews-card"
            data-category={category}
            data-order={order}
            key={`${category}-${index}`}
          >
            <p className="reviews-card__text">{text}</p>

            <footer className="reviews-card__author">
              <span className="reviews-card__avatar" aria-hidden="true" />
              <span className="reviews-card__name">{author}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
