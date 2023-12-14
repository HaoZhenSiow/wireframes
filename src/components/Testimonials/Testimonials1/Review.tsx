import { component$, useStylesScoped$ } from '@builder.io/qwik'
import useDialog from '~/hooks/useDialog'

export default component$(({ title, copy }: 
{ title: string; copy: string[]}) => {
  useStylesScoped$(`
    .review {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 3px 13px 21px -3px rgba(161,161,161,0.4);

      &:nth-child(4), &:nth-child(5), &:nth-child(6) {
        display: none;
      }

      @media (width > 650px) {
        &:nth-child(4) {
          display: block;
        }
      }

      @media (width > 1200px) {
        &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          display: block;
        }
      }
    }

    .visual {
      position: relative;
      aspect-ratio: 3/2;
      background-color: #525252;
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2em 1.5em;
      letter-spacing: -0.07em;

      > div {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: auto;
        -webkit-line-clamp: 3;
      }
    }

    b {
      font-size: 1.3em; 
      line-height: 1.2;
    }

    p {
      margin-block: 1em;
    }

    button {
      margin-top: .5em;
      padding: 0;
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: 700;
    }

    dialog {
      width: 80%;
      max-width: 40.125em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 3em 2em;

      > p {
        color: red;
      }
    }
  `)

  const { dialogRef, isShown, showDialog } = useDialog()

  return (
    <div class="review">
      <div class="visual"></div>
      <div class="copy">
        <b>{title}</b>
        <div>
          {copy.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <button type="button" onClick$={() => showDialog()}>continue reading...</button>
      </div>
      {isShown && <dialog ref={dialogRef}>
        <div>
          <b>{title}</b>
          {copy.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </dialog>}
    </div>
  )
})