import { component$, useStylesScoped$ } from "@builder.io/qwik";
import fluid from "~/lib/fluid";

export default component$(({ heroImages, reverse }: {
  heroImages: string[],
  reverse?: boolean
}) => {
  useStylesScoped$(`
    .marquee {
      --img-width: ${fluid(250, 300, 320, 1440)};
      --mask-gradient: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 52%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%);
      -webkit-mask-image: var(--mask-gradient);
      mask-image: var(--mask-gradient);
      display: flex;
      overflow: hidden;
    }

    .row {
      display: flex;
      animation: marquee 20s linear infinite;
    }

    .row.reverse {
      animation-direction: reverse;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    .img {
      width: var(--img-width);
      aspect-ratio: 16/9;
      background-color: #525252;
      border-radius: 10px;
      margin-inline: 10px;
    }
  `)
  
  return (
    <div class={`marquee`}>
      {Array(2).fill('x').map((x, idx) => (
        <div key={idx} class={`row ${reverse && 'reverse'}`}>
          {heroImages.map((img, idx) => (
            <div key={idx} class="img"></div>
          ))}
        </div>
      ))}
    </div>
  )
})