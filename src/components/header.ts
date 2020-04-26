import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import image from '../assets/header.jpg';

@customElement('ed-header')
export class EdHeader extends LitElement {
  imageOffset = 0;

  constructor() {
    super();
  }

  static get styles(): CSSResult[] {
    return [
      css`
        .header {
          position: relative;
          height: 70vh;

          @media (min-width: 600px) {
            height: 900px;
          }
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
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <div class="header">
        <div class="hero" #hero>
          <div class="box-shadow"></div>
          <img class="hero-image" src="${image}" style="top: ${this.imageOffset}px" />
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
