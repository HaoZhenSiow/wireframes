import { component$,useStylesScoped$ } from '@builder.io/qwik'

import Project from './Project'
import Button1 from '~/components/Button/Button1'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      align-self: start;
    }

    div {
      display: grid;
      gap: 1.5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `)

  return (
    <section class="fluid-section" aria-label="portfolio">
      <h2>Outstanding Work and Nothing Less</h2>
      {/* <h2 class="text-center">Outstanding Work<br class="gte650:hidden" /> and Nothing Less</h2> */}
      {/* <h2>Find Out What <br/>We Do Best</h2> */}
      <div>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <Button1>All Projects</Button1>
    </section>
  )
})