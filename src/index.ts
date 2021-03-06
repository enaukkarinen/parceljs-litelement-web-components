import { LitElement, html, customElement, TemplateResult, css, CSSResult } from '@polymer/lit-element';
import 'intersection-observer';

import './styles/main.css';

import styles from './index.css';
import './components/header/header';
import './components/intro/intro';
import './components/gallery/gallery';
import './components/image-break';
import './components/section-break/section-break';
import './components/flash-card/flash-card';

import image27 from './assets/pictures/27.jpg';
import justGiving from './assets/just-giving.png';

import { story1 } from './story1';
import { story2 } from './story2';

@customElement('ed-main')
export class EdMain extends LitElement {

  static get styles(): CSSResult[] {
    return [styles];
  }

  render(): TemplateResult {
    return html`
      <ed-header></ed-header>

      <section>
        <ed-intro></ed-intro>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[0].url}">
          <ed-flash-card message="${story1.breaks[0].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story1.galleries[0])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[1].url}">
          <ed-flash-card message="${story1.breaks[1].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story1.galleries[1])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story1.breaks[2].url}">
          <ed-flash-card message="${story1.breaks[2].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <ed-section-break></ed-section-break>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[0].url}">
          <ed-flash-card message="${story2.breaks[0].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[0])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[1].url}">
          <ed-flash-card message="${story2.breaks[1].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[1])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[2].url}">
          <ed-flash-card message="${story2.breaks[2].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[2])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[3].url}">
          <ed-flash-card message="${story2.breaks[3].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <section>
        <ed-gallery items="${JSON.stringify(story2.galleries[3])}"></ed-gallery>
      </section>

      <section>
        <ed-image-break backgroundUrl="${story2.breaks[4].url}">
          <ed-flash-card message="${story2.breaks[4].text}"></ed-flash-card>
        </ed-image-break>
      </section>

      <ed-section-break></ed-section-break>

      <section>
        <ed-image-break backgroundUrl="${image27}">
          <div class="just-giving">
            <span>If these images have brought you any joy, click the <a href="https://www.justgiving.com/fundraising/tara-raval" target="_blank">link</a> to donate.</span>
            <img src="${justGiving}" />
          </div>
        </ed-image-break>
      </section>
    `;
  }
}
