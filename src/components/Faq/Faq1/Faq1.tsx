import { component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'

import Accordion from './Accordion'
import QnA from './QnA'

export default component$(() => {
  useStylesScoped$(`
    .faq {
      display: flex;
      flex-direction: column;
      column-gap: 1.5em;

      @media (width > 1000px) {
        flex-direction: row;
      }
    }
  `)

  const expansionSig = useSignal(Array(QnA.length).fill(false)),
        expansionSig2 = useSignal(Array(QnA.length).fill(false))

  return (
    <section class="fluid-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq">
        <div>
          {QnA.map((item, idx) => (
            <Accordion key={'1 ' + idx} idx={idx} expansionSig={expansionSig} item={item}/>
          ))}
        </div>
        <div>
          {QnA.map((item, idx) => (
            <Accordion key={'2 ' + idx} idx={idx} expansionSig={expansionSig2} item={item}/>
          ))}
        </div>
      </div>
    </section>
  )
})