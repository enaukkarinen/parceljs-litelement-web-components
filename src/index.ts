import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import './styles/main.css';

import './components/header/header';
import './components/intro/intro';
import './components/gallery/gallery';
import './components/image-break';

import image27 from './assets/pictures/27.jpg';
import justGiving from './assets/just-giving.png';

import { story1 } from './story1';
import { story2 } from './story2';

@customElement('ed-main')
export class EdMain extends LitElement {
  text1 =
    '“Triveni’s unique and eclectic style pulls together strands from western and eastern movements to reflect a strong inner life experiencing the many faces of the world. In a resonant conversation with the natural world Triveni filters out the intense beauty of memories and nature.”';

  static get styles(): CSSResult[] {
    return [
      css`
        :host {
          display: block;
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 0;
        }

        section {
          margin: 3rem 0;
        }

        .image-break-slot {
          position: relative;
          background: #e6f8ff;
          width: 70vw;
          padding: 1rem;
          border-radius: 1rem;
          text-align: center;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        .image-break-slot img {
          width: 20%;
          margin-top: 1rem;
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <ed-header></ed-header>

      <section>
        <ed-intro></ed-intro>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[0].url}">
          <div class="image-break-slot">
            <span>
              ${story1.breaks[0].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story1.galleries[0])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[1].url}">
          <div class="image-break-slot">
            <span>
              ${story1.breaks[1].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story1.galleries[1])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[2].url}">
          <div class="image-break-slot">
            <span>
              ${story1.breaks[2].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section></section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[0].url}">
          <div class="image-break-slot">
            <span>
              ${story2.breaks[0].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[0])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[1].url}">
          <div class="image-break-slot">
            <span>
              ${story2.breaks[1].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[1])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[2].url}">
          <div class="image-break-slot">
            <span>
              ${story2.breaks[2].text}
            </span>
          </div>
        </ed-image-break>
      </section>

      <section></section>

      <section>
        <ed-image-break backgroundUrl="${image27}">
          <div class="image-break-slot">
            <span>If these images have brought you any joy, click the <a href="">link</a> to donate.</span>
            <img src="${justGiving}" />
          </div>
        </ed-image-break>
      </section>
    `;
  }
}
