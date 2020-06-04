import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

// import './typings.d.ts';

import './styles/main.css';

import './components/header/header';
import './components/intro/intro';
import './components/gallery/gallery';
import './components/image-break';

import image9 from './assets/image9.jpg';

import image2 from './assets/image2.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image11 from './assets/image11.jpg';
import justGiving from './assets/just-giving.png';

import { GalleryItem } from './components/gallery/gallery';

@customElement('ed-main')
export class EdMain extends LitElement {
  text1 =
    '“Triveni’s unique and eclectic style pulls together strands from western and eastern movements to reflect a strong inner life experiencing the many faces of the world. In a resonant conversation with the natural world Triveni filters out the intense beauty of memories and nature.”';

  galleryItems: GalleryItem[] = [
    {
      url: image2,
      label: "Princess' pathway"
    },
    {
      url: image7,
      label: 'Hyeena pounces'
    },
    {
      url: image8,
      label: 'Dance of the flowers'
    },
    {
      url: image11,
      label: 'Freedom field'
    }
  ];

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
        <ed-image-break prop1="${image8}" text="${this.donateCta}">
          <div class="image-break-slot">
            <span>
              Born in 1935, the oldest of 7 sisters, Tivani spent a happy childhood in Kenya with her family, friends
              and little dog. When she was 4 her younger sister suffered from Polio. This left her sister unable to walk
              properly.
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(this.galleryItems)}"></ed-gallery>
      </section>

      <section>
        <ed-image-break prop1="${image8}" text="${this.donateCta}">
          <div class="image-break-slot">
            <span>
              At first she didn't even want to try to move around and walk. The Father told the other girls that it was
              their job to help her. All of the other sisters encouraged her to walk.
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(this.galleryItems)}"></ed-gallery>
      </section>

      <section>
        <ed-image-break prop1="${image8}" text="${this.donateCta}">
          <div class="image-break-slot">
            <span>
              No matter what the game they would try to persuade her to join in. They would play with her, holdin her
              hands. Everyone started to do it and as time went by she started to walk. Support and love can help us
              overcome our difficulties and both the recipient and giver get joy out of it.
            </span>
          </div>
        </ed-image-break>
      </section>

      <section>dgnadlkgn;sgasdfkasd;lfs anf </section>

      <section>
        <ed-image-break prop1="${image9}" text="${this.text1}">
          <div class="image-break-slot">
            <span>If these images have brought you any joy, click the <a href="">link</a> to donate.</span>
            <img src="${justGiving}" />
          </div>
        </ed-image-break>
      </section>
    `;
  }
}
