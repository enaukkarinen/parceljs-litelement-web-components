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
        <h2>Pictures</h2>
        <ed-gallery items="${JSON.stringify(this.galleryItems)}"></ed-gallery>
      </section>

      <section>
        <ed-image-break prop1="${image9}" text="${this.text1}"></ed-image-break>
      </section>
    `;
  }
}
