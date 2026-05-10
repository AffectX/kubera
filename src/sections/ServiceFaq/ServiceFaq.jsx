import './ServiceFaq.scss'

const items = [
  {
    question: 'Вопрос 1',
    answer:
      'Срок зависит от материала, объема и сложности профиля. После замера мы фиксируем этапы работ и называем понятный срок производства.',
  },
  {
    question: 'Вопрос 2',
    answer:
      'Да, подберем оттенок по образцу, каталогу или фотографии. Перед запуском партии можно согласовать тестовое окрашивание.',
  },
  {
    question: 'Вопрос 3',
    answer:
      'Да, специалист выезжает на объект, проверяет размеры проемов и учитывает особенности монтажа, чтобы детали подошли без доработок.',
  },
  {
    question: 'Вопрос 4',
    answer:
      'Работаем с массивом, мебельным щитом и другими породами дерева. Подскажем вариант под бюджет, нагрузку и визуальную задачу.',
  },
  {
    question: 'Вопрос 5',
    answer:
      'Перед началом работ согласуем размеры, материал, цвет и комплектацию. Все параметры фиксируются, чтобы результат совпал с ожиданиями.',
  },
  {
    question: 'Вопрос 6',
    answer:
      'Готовые изделия можно забрать самостоятельно или оформить доставку. Условия зависят от адреса, объема заказа и выбранного способа монтажа.',
  },
]

export default () => {
  return (
    <section className="service-faq container" aria-labelledby="service-faq-title">
      <div className="service-faq__header">
        <h2 className="service-faq__title h2" id="service-faq-title">
          Частые вопросы
        </h2>
      </div>

      <div className="service-faq__list">
        {items.map(({ question, answer }) => (
          <details className="service-faq__item" key={question}>
            <summary className="service-faq__summary">
              <span className="service-faq__question">{question}</span>
              <span className="service-faq__icon" aria-hidden="true" />
            </summary>
            <div className="service-faq__content">
              <p className="service-faq__answer">{answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
