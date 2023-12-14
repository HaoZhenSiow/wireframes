import { component$, useStylesScoped$ } from '@builder.io/qwik'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    h2 {
      margin-top: 1.5em;
      margin-bottom: 1em;
    }

    br { display: none; }

    p {
      max-width: 38.125em;
      margin-block: 1.5em;
    }

    li { margin-bottom: .5em; }

    .visual {
      width: 100%;
      max-width: 500px;
      aspect-ratio: 3/2;
      background-color: #525252;
      border-radius: 10px;
      align-self: center;
    }

    @media (width > 1000px) {
      section { flex-direction: row; }
      h2 { margin-top: 0; }
      br { display: inline; }

      .visual {
        width: 60%;
        margin-left: 3em;
        flex-shrink: 0;
      }

      section.left { flex-direction: row-reverse; }

      .left .visual {
        margin-left: 0;
        margin-right: 3em;
      }
    }
  `)

  const isVisualLeft = false

  return (
    <section class={`fluid-section ${isVisualLeft ? 'left' : ''}`}>
      <div>
        <h2>Crack the Code to<br /> Transparent Renovation Pricing</h2>
        <p>Hidden costs and unexpected expenses can turn your dream home project into a financial nightmare. But worry not! We&apos;ve introduced E Build Assist, a revolutionary quotation system that provides you:</p>
        <ul>
          <li>Accurate Quotation in Just 1 Hour</li>
          <li>Drag-and-Drop Features which you can Easily Customize Your Quotation</li>
          <li>Access the User-Friendly Platform within 3 days from Your First Consultation</li>
          <li>Transparent Cost Breakdown</li>
          <li>Effortless Comparison with Other Agencies&apos; Quotation</li>
          <li>Comprehensive Insight into Your Home Transformation Process</li>
        </ul>
      </div>
      <div class="visual"></div>
    </section>
  )
})