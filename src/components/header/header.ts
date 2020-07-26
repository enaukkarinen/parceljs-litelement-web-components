import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import styles from './header.css';

import headerImage from '../../assets/header.jpg';
import profileImage from '../../assets/granny-5.jpg';

@customElement('ed-header')
export class EdHeader extends LitElement {
  imageOffset = 0;

  constructor() {
    super();
  }

  static get styles(): CSSResult[] {
    return [styles];
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
          <div class="face-card__name">Triveni</div>
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
