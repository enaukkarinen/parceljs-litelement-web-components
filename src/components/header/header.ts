import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import headerImage from '../../assets/header.jpg';
import profileImage from '../../assets/granny-5.jpg';

@customElement('ed-header')
export class EdHeader extends LitElement {
  imageOffset = 0;

  constructor() {
    super();
  }

  static get styles(): CSSResult[] {
    return [
      css`
        :host {
          display: block;
        }

        .header {
          position: relative;
          height: 70vh;
          padding-bottom: 3rem;
        }

        .hero {
          height: 100%;
          position: relative;
          overflow: hidden;

          border-bottom-left-radius: 6vw;
          margin-left: 4vw;
        }

        .hero-image {
          position: absolute;
          object-fit: cover;
          width: 100%;
          height: 100%;
          transform: translateX(-50%);
          left: 50%;

          animation: focus 0.4s ease-in;
          animation-play-state: running;
        }

        .box-shadow {
          border-bottom-left-radius: 6vw;
          box-shadow: inset 11px -12px 30px -10px rgba(0, 0, 0, 0.35);
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 2;
        }

        .face-card {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);

          width: 180px;
          height: 222px;
          background: #ecfffc;

          z-index: 3;
          border-radius: 1rem;
          overflow: hidden;
          display: flex;
          flex-flow: column;
        }

        @media (min-width: 600px) {
          .face-card {
            left: 12vw;
            transform: unset;
          }
        }

        .face-card__image-container {
          flex: 1;
          width: 100%;
          overflow: hidden;
        }

        .face-card__image {
          object-fit: contain;
          width: 100%;
          clip-path: circle(44%);
          height: 100%;
        }

        .face-card__name {
          height: 3rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 24px;
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="header">
        <div class="hero" #hero>
          <div class="box-shadow"></div>
          <img class="hero-image" src="${headerImage}" style="top: ${this.imageOffset}px" />
        </div>

        <div class="face-card">
          <div class="face-card__image-container">
            <img class="face-card__image" src="${profileImage}" />
          </div>
          <div class="face-card__name">Tirveni</div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.addEventListener('click', (evt) => {
      console.log(evt);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('scroll', () => this.handleScroll());
  }

  disconnectedCallback() {
    document.removeEventListener('scroll', () => this.handleScroll());
    super.disconnectedCallback();
  }

  handleScroll(): void {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.imageOffset = verticalOffset / 5;
    this.performUpdate();
  }

  async performUpdate() {
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    super.performUpdate();
  }
}
