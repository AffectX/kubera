import ReviewsHero from '@/sections/ReviewsHero'
import Questions from '@/sections/Questions'
import Route from '@/sections/Route'

export const metadata = {
  title: 'Отзывы',
}

export default () => {
  return (
    <>
      <ReviewsHero />
      <Questions />
      <Route />
    </>
  )
}
