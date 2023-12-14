import { component$, useStylesScoped$ } from '@builder.io/qwik'
import fluid from '~/lib/fluid'

import ImageMarquee from './ImageMarquee'

const heroImages = ['1', '2', '3', '4', '5']

export default component$(() => {
  useStylesScoped$(`
    header {
      --title-fs: ${fluid(30, 52, 320, 1440)};
      padding-top: ${fluid(100, 140, 320, 1440)};
    }

    .visual {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: var(--title-fs);
      margin-top: 1em;
    }

    p {
      max-width: 38.125em;
      margin-block: 2em;
    }

    .first-br {
      display: none;

      @media (width > 768px) {
        display: inline;
      }
    }

    .second-br {
      @media (width > 640px) {
        display: none;
      }
    }

    button {
      background-color: black;
      color: white;
      font-weight: bold;
      padding: 1em 2em;
      border-radius: 5px;
    }

    small {
      margin-top: .3em;
    }
  `)

  return (
    <header class="fluid-header">
      <div class="visual">
        <ImageMarquee heroImages={heroImages} />
        <ImageMarquee heroImages={heroImages} reverse />
      </div>
      <div class="copy">
        <h1>Redefining Renovation Experience <br class="first-br" />Where<br class="second-br" /> Trust Comes First</h1>
        <p>
          The most reliable interior design firm in Singapore, backed by over X happy customers, where your dream home is delivered, not nightmares!
        </p>
        <button type="button">Get my Quote Now</button>
        <small>It's free, no consultation fee</small>
      </div>
    </header>
  )
})