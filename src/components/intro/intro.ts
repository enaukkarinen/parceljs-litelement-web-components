import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';

import pattern from '../../assets/pattern.png';

@customElement('ed-intro')
export class EdIntro extends LitElement {
  static get styles(): CSSResult[] {
    return [
      css`
        :host {
          display: block;
          font-size: 1.75rem;
          text-align: center;
          font-style: italic;
          position: relative;
          background: var(--primary-bg);
        }

        .intro-overlay {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-size: 200%;
          opacity: 0.33;
        }

        .intro-text {
          padding: 2rem;
          opacity: 0.99;
          background: transparent;
          font-size: 1.25rem;
        }

        @media (min-width: 600px) {
          .intro-text {
            padding: 4rem 6rem;
            font-size: 1.75rem;
          }
        }
      `
    ];
  }

  render(): TemplateResult {
    return html`
      <style>
        .intro-overlay {
          background: url('${pattern}');
        }
      </style>
      <div class="intro-overlay"></div>
      <div class="intro-text">
        “Triveni’s unique and eclectic style pulls together strands from western and eastern movements to reflect a
        strong inner life experiencing the many faces of the world. In a resonant conversation with the natural world
        Triveni filters out the intense beauty of memories and nature. Born in 1935, the oldest of seven loving and talented sisters, Triveni spent a happy childhood in Kenya with her family, friends and little dog. The art
        below depicts memories from her life in a fresh and inspiring way.”
      </div>
    `;
  }
}
