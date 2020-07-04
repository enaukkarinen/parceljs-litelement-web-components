import { LitElement, html, customElement, TemplateResult, CSSResult, property } from '@polymer/lit-element';

import styles from './flash-card.css';

@customElement('ed-flash-card')
export class EdFlashCard extends LitElement {

  @property({ type: String }) message: string;
  @property({ type: String }) cardClass: string;

  observer: IntersectionObserver;
  observerOptions: IntersectionObserverInit = {
    threshold: [0.15],
    rootMargin: '-20% 0% -20% 0%'
  };

  constructor() {
    super();

    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.observerOptions);
  }
  static get styles(): CSSResult[] {
    return [styles];
  }
  updated() {
    console.log('updated');

    const queryable = this.shadowRoot.querySelector('div');
    this.observer.observe(queryable);
  }
  render(): TemplateResult {
    return html`
      <div class="flash-card ${this.cardClass}">
        ${this.message}
      </div>
    `;
  }

  handleIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting && this.cardClass === undefined) {
        this.fadeIn();
        this.observer.disconnect();
      }
    });
  }

  fadeIn() {
    this.cardClass = 'fade-in';
  }

  async performUpdate() {
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    super.performUpdate();
  }
}
