import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Cases from '@/sections/Cases'
import Products from '@/sections/Products'
import Questions from '@/sections/Questions'
import Reviews from '@/sections/Reviews'
import Route from '@/sections/Route'
import Standards from '@/sections/Standards'
import WorkFeatures from '@/sections/WorkFeatures'
import ProductionShowcase from '@/sections/ProductionShowcase'

export const metadata = {
  title: 'Главная',
}

export default () => {
  return (
    <>
      <Hero />
      <Products />
      <Advantages />
      <Cases />
      <ProductionShowcase />
      <Reviews />
      <WorkFeatures />
      <Standards />
      <Questions />
      <Route />
    </>
  )
}
