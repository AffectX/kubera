import './ServiceMaterials.scss'
import ashImage from '@/assets/images/ServiceMaterials/ash.png'
import beechImage from '@/assets/images/ServiceMaterials/beech.png'
import larchImage from '@/assets/images/ServiceMaterials/larch.png'
import oakImage from '@/assets/images/ServiceMaterials/oak.png'
import pineImage from '@/assets/images/ServiceMaterials/pine.png'
import walnutImage from '@/assets/images/ServiceMaterials/walnut.png'

const materials = [
  {
    title: 'Дуб',
    image: oakImage,
  },
  {
    title: 'Ясень',
    image: ashImage,
  },
  {
    title: 'Лиственница',
    image: larchImage,
  },
  {
    title: 'Сосна',
    image: pineImage,
  },
  {
    title: 'Орех',
    image: walnutImage,
  },
  {
    title: 'Бук',
    image: beechImage,
  },
]

export default () => {
  return (
    <section className="service-materials container" aria-labelledby="service-materials-title">
      <h2 className="service-materials__title h2" id="service-materials-title">
        Материалы для наличников
      </h2>

      <ul className="service-materials__list">
        {materials.map(({ title, image }) => (
          <li className="service-materials__item" key={title}>
            <article
              className="service-materials-card"
              style={{ '--material-image': `url(${image})` }}
            >
              <h3 className="service-materials-card__title h3">{title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
