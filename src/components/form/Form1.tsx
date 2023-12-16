import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

export default component$(() => {
  useStylesScoped$(writeStyle())
  return (
    <section class="fluid-section" aria-label="contact form">
      <h2>Tell Us Your Story</h2>
      {/* <p>Design is about life and the way you experience them.</p> */}
      <form action="">
        <fieldset>
          <label for="name">
            <span>Hi,</span>
            <span>I'm</span>
            <input type="text" name="name" placeholder="Name*" required />
          </label>
          <label for="house-type">
            <span>and</span>
            <span>I'm</span>
            <span>looking</span>
            <span>for</span>
            <span>an</span>
            <span>Interior</span>
            <span>Designer</span>
            <span>to</span>
            <span>possibly</span>
            <span>renovate</span>
            <span>my</span>
            <input type="text" name="house-type" placeholder="house type*" list="house-type" required />
          </label>
          <datalist id="house-type">
            <option value="2-room resale">2-room resale</option>
            <option value="3-room resale">3-room resale</option>
            <option value="4-room resale">4-room resale</option>
            <option value="5-room resale">5-room resale</option>
            <option value="2-room bto">2-room bto</option>
            <option value="3-room bto">3-room bto</option>
            <option value="4-room bto">4-room bto</option>
            <option value="5-room bto">5-room bto</option>
            <option value="2-room condo">2-room condo</option>
            <option value="3-room condo">3-room condo</option>
            <option value="4-room condo">4-room condo</option>
            <option value="5-room condo">5-room condo</option>
            <option value="landed">landed</option>
          </datalist>
          <label for="phone">
            <span>You</span>
            <span>can</span>
            <span>reach</span>
            <span>me</span>
            <span>at</span>
            <input type="number" name="phone" placeholder="Phone*" required />
          </label>
          <button type="submit">
            Get my Quote
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg> 
          </button>
        </fieldset>
      </form>
    </section>
  )
});

function writeStyle() {
  return `
    form {
      margin-top: calc(var(--fluid-h2) * 3.5);
      font-family: var(--heading-font);
    }

    // h2 { margin-bottom: .2em; }

    // p { line-height: 1; }

    label, input {
      font-size: calc(var(--fluid-lg) * 1.5);
    }

    label {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: .3em;
      font-weight: 400;
      margin-bottom: .3em;
      line-height: 1;
    }

    input {
      width: 2em;
      flex-grow: 1;
      border: none;
      outline: none;
      border-bottom: .07em solid currentColor;
    }

    button {
      font-family: var(--heading-font);
      font-size: ${fluid(40, 96, 330, 1440)};
      background-color: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      gap: .2em;
      margin-top: 1em;
    }
  `
}