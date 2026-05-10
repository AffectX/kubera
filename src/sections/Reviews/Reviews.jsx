import './Reviews.scss'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const reviews = Array.from({ length: 8 }, (_, index) => ({
  text: 'Текст отзыва',
  author: `Имя ${index + 1}`,
}))

export default () => {
  return (
    <section className="reviews container" aria-labelledby="reviews-title">
      <div className="reviews__header">
        <h2 className="reviews__title h2" id="reviews-title">
          Мнение наших клиентов
        </h2>
      </div>

      <div className="reviews__slider" data-js-reviews-slider="">
        <div className="reviews__viewport">
          <div className="reviews__track" data-js-reviews-slider-track="">
            {reviews.map(({ text, author }) => (
              <article className="reviews-card" key={author}>
                <p className="reviews-card__text">{text}</p>

                <footer className="reviews-card__author">
                  <span className="reviews-card__avatar" aria-hidden="true" />
                  <span className="reviews-card__name">{author}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews__controls" aria-label="Навигация по отзывам">
          <button
            className="reviews__arrow reviews__arrow--prev"
            type="button"
            aria-label="Предыдущие отзывы"
            data-js-reviews-slider-prev=""
          >
            <Icon className="reviews__arrow-icon" name="arrow-left" />
          </button>
          <button
            className="reviews__arrow reviews__arrow--next"
            type="button"
            aria-label="Следующие отзывы"
            data-js-reviews-slider-next=""
          >
            <Icon className="reviews__arrow-icon" name="arrow-right" />
          </button>
        </div>
      </div>

      <Button className="reviews__button" href="/">
        Посмотреть все отзывы
      </Button>
    </section>
  )
}
