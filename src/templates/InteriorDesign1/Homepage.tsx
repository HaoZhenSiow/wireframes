import { component$ } from '@builder.io/qwik'
import LogoMarquee from '~/components/awards/LogoMarquee'

import DoubleMarqueeHero from '~/components/hero/double-marquee/DoubleMarqueeHero'

export default component$(() => {
  return (
    <>
      <DoubleMarqueeHero />
      <main>
        <LogoMarquee />
      </main>
    </>
  )
})