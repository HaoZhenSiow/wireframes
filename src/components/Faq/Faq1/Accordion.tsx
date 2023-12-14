import { type Signal, component$, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik"

export default component$(({ idx, expansionSig, item }: {
  idx: number,
  expansionSig: Signal<boolean[]>,
  item: {
    question: string,
    answer: string[]
  }
}) => {

  const contentSig = useSignal<HTMLDivElement>()

  useStylesScoped$(writeAccordionStyle())
  useVisibleTask$(function detectContentHeight() {
    if (!contentSig.value) return

    const child = contentSig.value.childNodes[0] as HTMLElement,
          childHeight = child.getBoundingClientRect().height

    contentSig.value.style.setProperty("--content-height", `${Math.ceil(childHeight)}px`)
  })

  return (
    <div class="accordion">
      <button type="button" aria-expanded={expansionSig.value[idx]} onClick$={() => {
        const newBooleanArr = [...expansionSig.value].fill(false)
        newBooleanArr[idx] = !expansionSig.value[idx]
        expansionSig.value = newBooleanArr
      }}>
        <span class="title">{item.question}</span>
        <span aria-hidden={!expansionSig.value[idx]} class="toggle"/>
      </button>
      <div id="some-content-1" class="content" ref={contentSig}>
        <div>
          {item.answer.map((ans, idx) => (
            <p key={idx}>{ans}</p>
          ))}
        </div>
      </div>
    </div>
  ) 
})

function writeAccordionStyle() {
  return `
    .accordion {
      border-bottom: 1px solid;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: .5em 0;
      font-size: 1em;
      font-weight: 700;
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      text-align: left;
    }

    .toggle {
      position: relative;
      display: inline-block;
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      margin-left: .5em;

      &::before, &::after {
        display: block;
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: currentColor;
      }
      
      &::before {
        width: 50%;
        height: 10%;
      }

      &::after {
        width: 10%;
        height: 50%;
      }
      
    }

    .content {
      overflow: hidden;
      max-height: 0;
      transition: all 200ms linear;
    }

    .content p:not(:last-child) {
      margin-block-end: 1em;
    }

    .content > div { 
      padding-block: 1em;
      opacity: 0.8;
     }

    .toggle[aria-hidden="false"] {
      &::after {
        opacity: 0;
      }
    }

    button[aria-expanded="true"] {
      border-bottom: 1px solid;
    }

    button[aria-expanded="true"] + .content {
      max-height: var(--content-height);
    }
  `
}