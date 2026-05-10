import ServiceColors from '@/sections/ServiceColors'
import ServiceBenefits from '@/sections/ServiceBenefits'
import ServiceCases from '@/sections/ServiceCases'
import ServiceHero from '@/sections/ServiceHero'
import ServiceIncludes from '@/sections/ServiceIncludes'
import ServiceMaterials from '@/sections/ServiceMaterials'
import ServiceOptions from '@/sections/ServiceOptions'
import ServicePlans from '@/sections/ServicePlans'
import ServiceProcess from '@/sections/ServiceProcess'
import ServiceRequest from '@/sections/ServiceRequest'
import Reviews from '@/sections/Reviews'
import ServiceFaq from '@/sections/ServiceFaq'
import Questions from '@/sections/Questions'
import Route from '@/sections/Route'

export const metadata = {
  title: 'Услуга',
}

export default () => {
  return (
    <>
      <ServiceHero />
      <ServiceIncludes />
      <ServiceMaterials />
      <ServiceColors />
      <ServiceRequest />
      <ServiceBenefits />
      <ServicePlans />
      <ServiceOptions />
      <ServiceCases />
      <ServiceProcess />
      <Reviews />
      <ServiceFaq />
      <Questions />
      <Route />
    </>
  )
}
